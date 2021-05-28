import { Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { OrderService } from "./order.service";
import { Order } from "../types/order.entity";

@Controller('order')
export class OrderController {

}