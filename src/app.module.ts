import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoginController } from "./login/login.controller";
import { AuthenticatorService } from "./authenticator/authenticator.service";
import { AccountService } from "./account/account.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountModule } from "./account/account.module";
import { MenuController } from "./menu/menu.controller";
import { MenuService } from "./menu/menu.service";
import { MenuModule } from "./menu/menu.module";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "capstone",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
  }),
    AccountModule, MenuModule
  ],
  exports: [TypeOrmModule],
  controllers: [AppController, LoginController, MenuController],
  providers: [AppService, AuthenticatorService, AccountService, MenuService]
})
export class AppModule {
}
