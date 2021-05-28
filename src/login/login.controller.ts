import { Controller, Get, Req } from "@nestjs/common";
import { AuthenticatorService } from '../authenticator/authenticator.service';
import { Request } from "express";

//로그인 단계
@Controller('login')
export class LoginController {
  constructor(private authenticator: AuthenticatorService) {

  }
  @Get('/login')
  public async login(@Req() req: Request): Promise<string> {
     const jwt = await this.authenticator.authenticate(req.body['id'], req.body['password']);
     if (jwt !== undefined) {
       return JSON.stringify({
         'code': 200,
         'result': jwt
       });
     }
    return JSON.stringify({
      'code': 400,
      'result': 'fail to login'
    });
  }
}
