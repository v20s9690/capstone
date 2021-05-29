import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import {Module} from "@nestjs/common";
import { AppService } from './app.service';
import { Request } from "express";



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

