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
import { OrderModule } from "./order/order.module";
import { OrderService } from "./order/order.service";
import { OrderController } from "./order/order.controller";

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
    AccountModule, MenuModule, OrderModule
  ],
  exports: [TypeOrmModule],
  controllers: [AppController, LoginController, MenuController, OrderController],
  providers: [AppService, AuthenticatorService, AccountService, MenuService, OrderService]
})
export class AppModule {
}
