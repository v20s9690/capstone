import { Controller, Get, Res } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res): void {
    res.json({
      "result": [
        {
          "name": "일식",
          "menus": [
            {
              "id": 1,
              "price": 1000
            }
          ]
        }
      ]
    })
  }
}
