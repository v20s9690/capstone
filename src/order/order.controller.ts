import { Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { OrderService } from "./order.service";
import { Order } from "../types/order.entity";
import { OrderMenus, SimpleOrder } from "../types/order-menus.class";


@Controller('order')
export class OrderController {
  constructor(private OrderService: OrderService) {}

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
        const orders = await this.OrderService.findAll();
        const ordersByMenu: Map<string, Order[]> = new Map();
        orders.forEach(order => {
          if(!ordersByMenu.has(order.menu)){
            ordersByMenu.set(order.menu, new Array());
          }
          const orderList = ordersByMenu.get(order.menu);
          orderList.push(order);
        });
        ordersByMenu.forEach((orders, key) => {
          const simpleOrders = new Array<SimpleOrder>();
          orders.forEach(order => simpleOrders.push(SimpleOrder.from(order)));
          const ordMenus = new OrderMenus(key, simpleOrders);
          res.result.push(ordMenus);
        })
        break;
      default:
        break;
    }
    return JSON.stringify(res);
  }

  /*@Post('getorder/:order') // 받은 주문을 프론트(테이블)에게 배열 형태로 받아온다.
  sync getOrder(@Req() request: Request): Promise<string> {

  }*/

}