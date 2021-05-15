import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoginController } from "./login/login.controller";
import { AuthenticatorService } from "./authenticator/authenticator.service";
import { AccountService } from "./account/account.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountModule } from "./account/account.module";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mariadb",
    host: "40.121.88.111",
    port: 3306,
    username: "root",
    password: "root",
    database: "capstone",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
  }),
    AccountModule
  ],
  exports: [TypeOrmModule],
  controllers: [AppController, LoginController],
  providers: [AppService, AuthenticatorService, AccountService]
})
export class AppModule {
}
