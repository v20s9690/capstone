import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { MenuService } from "./menu.service";
import { Menu } from "../types/menu.entity";
import { CategoryMenus, SimpleMenu } from "../types/category-menus.class";

@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Get()
  category(@Req() request): string{
    return "hello world";
  }

  @Get('category/:category')
  async categoryAndMenus(@Req() request: Request): Promise<string> {
    let res = { result: []};
    const categoryType = request.params.category;
    switch (categoryType) {
      case "all":
        const menus = await this.menuService.findAll();
        const menusByCat: Map<string, Menu[]> = new Map();
        menus.forEach(menu => {
          if (!menusByCat.has(menu.category)) {
            menusByCat.set(menu.category, new Array());
          }
          const menuList = menusByCat.get(menu.category);
          menuList.push(menu);
        });
        menusByCat.forEach((menus, key) => {
          // key is category
          const simpleMenus = new Array<SimpleMenu>();
          menus.forEach(menu => simpleMenus.push(SimpleMenu.from(menu)));
          const catMenus = new CategoryMenus(key, simpleMenus);
          res.result.push(catMenus);
        });
        break;
      default:
        break;
    }
    return JSON.stringify(res);
  }
}
