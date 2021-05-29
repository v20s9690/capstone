import { Controller, Get, Post, Req } from "@nestjs/common";
import {  Request } from "express";
import { OrderService } from "./order.service";
import { Order } from "../types/order.entity";


@Controller('order')
export class OrderController {
  constructor(private OrderService: OrderService) {}

  @Get('/order')
  public async getOrder(@Req() request): Promise<any>{
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
        break;
      default:
        break;
    }
    return JSON.stringify(res);
  }

}