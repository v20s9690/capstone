import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "../types/order.entity";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller"

@Module({
  imports: [TypeOrmModule.forFeature()],
  exports: [TypeOrmModule],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}