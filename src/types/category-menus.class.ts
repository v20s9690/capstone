import { Menu } from "./menu.entity";

export class CategoryMenus {
  name: string;
  menus: Array<SimpleMenu>;

  constructor(name: string, menus: Array<SimpleMenu> = new Array<SimpleMenu>()) {
    this.name = name;
    this.menus = menus;
  }
}

export class SimpleMenu {
  id: number;
  menu: string;
  img: string;
  price: number;

  constructor(id: number, menu: string, img: string, price: number) {
    this.id = id;
    this.menu = menu;
    this.img = img;
    this.price = price;
  }

  static from(menu: Menu): SimpleMenu {
    return new SimpleMenu(menu.id, menu.menu, menu.img, menu.price);
  }
}