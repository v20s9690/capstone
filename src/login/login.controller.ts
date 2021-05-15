import { Controller, Get, Req } from "@nestjs/common";
import { AuthenticatorService } from '../authenticator/authenticator.service';
import { Request } from "express";

@Controller('login')
export class LoginController {
  constructor(private authenticator: AuthenticatorService) {

  }
  @Get('')
  public async login(@Req() req: Request): Promise<string> {
    // const jwt = await this.authenticator.authenticate(req.body['id'], req.body['password']);
    // if (jwt !== undefined) {
    //   return jwt;
    // }
    return 'hello';
  }
}
