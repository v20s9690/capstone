import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from "../types/order.entity";
import { Repository } from 'typeorm';



@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) {}

  async findOne(menu: string): Promise<Order> {
    return this.orderRepository.findOne({
      where: { menu: menu }
    });
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }

 async findByMenu(menuName: string): Promise<Order[]> {
    return this.orderRepository.find({
      where: {Menu: menuName},
      order: {menu: "ASC"}
    });
  }

}
