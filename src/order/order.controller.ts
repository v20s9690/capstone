import { Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { OrderService } from "./order.service";
import { Order } from "../types/order.entity";
import { OrderMenus, SimpleOrder } from "../types/order-menus.class";


@Controller('order')
export class OrderController {
  constructor(private OrderService: OrderService) {}

  @Get()
  category(@Req() request): string{
    return "hello world";
  }

  @Get('ordermenu/:order')
  public async getOrder(@Req() request: Request): Promise<string>{
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

}