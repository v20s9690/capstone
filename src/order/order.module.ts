import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "../types/order.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  exports: [TypeOrmModule]
})
export class OrderModule {}