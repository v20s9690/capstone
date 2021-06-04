import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { OrderService } from "./order.service";
import { Order } from "../types/order.entity";
import { OrderMenus, SimpleOrder } from "../types/order-menus.class";
import { RequestedOrder } from "../types/requested-order.class"; //OrderMenus


@Controller('order')
export class OrderController {
  orderPool: Array<RequestedOrder> = new Array<RequestedOrder>();
  constructor(private orderService: OrderService) {}

  @Get() // 주소의 /order에 들어갔을 때, hello world를 출력한다.(테스트용)
  category(@Req() request): string{
    return "hello world";
  }

  @Get('giveorder/:order') // 받은 주문을 프론트(카운터)에게 배열 형태로 보내준다.
  async giveOrder(@Req() request: Request): Promise<string>{
    let res = { result:[] };
    const orderType = request.params.order;
    switch (orderType) {
      case "all":
        //
        if (this.orderPool.length !== 0) {
          const order = this.orderPool[0];
          const strOrder = JSON.stringify(order);
          this.orderPool.splice(0);
          return strOrder;
        }
      break;
      case "recover":
        const orders = await this.orderService.findAll();
        const result = new Array<SimpleOrder>();
        const ordersByMenu: Map<string, Order[]> = new Map();
        orders.forEach(order => {
          if(!ordersByMenu.has(order.menu)){
            ordersByMenu.set(order.menu, []);
          }
          const orderList = ordersByMenu.get(order.menu);
          orderList.push(order);
        });
        ordersByMenu.forEach((orders, key) => {

          orders.forEach(order => result.push(SimpleOrder.from(order)));
          //const ordMenus = new OrderMenus(key, simpleOrders);
          //res.result.push(ordMenus);
        });
        res.result = result;
        break;
      default:
      break;
    }
    return JSON.stringify(res);
  }

  @Post('getorder') // 받은 주문을 프론트(테이블)에게 배열 형태로 받아온다.
  async getOrder(@Req() request: Request): Promise<string> {
    //console.log(JSON.stringify(request.body));
    const reqOrder: RequestedOrder = request.body;

    reqOrder.result.forEach((order: SimpleOrder) => {
      const orderEntity = new Order();
      orderEntity.menu = order.menu;
      orderEntity.qty = order.qty;
      orderEntity.price = order.price;
      orderEntity.tableNo = order.tableNo;
      orderEntity.save();
    });
    const timestamp = new Date().getTime();
    this.orderPool.push(reqOrder);
    return '';
  }

  @Get('table/:table_no')
  async fetchOrderByTableNo(@Param('table_no') tableNumbers: string[]): Promise<string> {
    let simpleOrders = new Array<SimpleOrder>();
    switch (tableNumbers.length) {
      case 0:
        break;
      case 1:
        const tableNumber = tableNumbers[0];
        const orders = await this.orderService.findByTableNo(tableNumber);
        orders.forEach(order => {
          simpleOrders.push(SimpleOrder.from(order));
        });
        break;
      default:
        const tableOrders: Array<Array<Order>> = new Array<Array<Order>>();
        for (const tableNumber of tableNumbers) {
          const v = await this.orderService.findByTableNo(tableNumber);
          tableOrders.push(v);
        }
        tableOrders.forEach(tableOrder => {
          tableOrder.forEach(order => {
            simpleOrders.push(SimpleOrder.from(order));
          });
        });
        break;
    }
    return JSON.stringify({
      'result': simpleOrders
    });
  }

  @Get('purchase/:table_no')
  async purchaseByTableNo(@Param('table_no') tableNumbers: string): Promise<string> {
    let simpleOrders = new Array<SimpleOrder>();
    const o: {tables: Array<number>} = JSON.parse(`{ "tables": ${tableNumbers} }`);
    console.log(JSON.stringify(o));
    switch (o.tables.length) {
      case 0:
        break;
      default:
        const tableNumber = o.tables[0];
        const orders = await this.orderService.findByTableNo(tableNumber.toString(10));
        for (const order of orders) {
          order.purchase = true;
          await order.save();
        }
        break;
    }
    return JSON.stringify({
      "result": true
    });
  }
}