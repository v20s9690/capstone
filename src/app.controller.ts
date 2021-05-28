import { Controller, Get, Res } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //테이블의 태블릿으로부터 받은 주문을 카운터에 전달하는 단계
 @Get('')
  getHello(@Res() res): void {
    res.json({
      "result": [
        {
          "name": "식사류",
          "menus": [
            {
              "id": 1,
              "img": 11,
              "menu": 111,
              "price": 1000
            }
          ]
        }
      ]
    })
  }
}
