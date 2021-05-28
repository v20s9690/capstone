import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import {Module} from "@nestjs/common";
import { AppService } from './app.service';
import { Request } from "express";
import { Menu } from "./types/menu.entity";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //서버 -> 프론트 메뉴 전달
  /*getHello(@Res() res): void {
    res.json({
      "result": [
        {
          "name": "meals",
          "menus": [
            {
              "id": 1,
              "img": 11,
              "menu": "kalguksu",
              "price": 7000
            }
          ]
        }
      ]
    })
  }*/
}

