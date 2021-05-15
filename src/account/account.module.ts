import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "../types/account.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  exports: [TypeOrmModule]
})
export class AccountModule {}
