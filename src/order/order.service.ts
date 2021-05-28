import { Order } from "../types/order.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { AccountService } from "../account/account.service";

@Injectable()
export class OrderService {
  constructor(private orderService: OrderService) {}

  async findOne(name: string): Promise<any> {
    where: {}
  }

}
