import { Order } from "./order.entity";

/*export class OrderMenus {
  name: string;
  menus: Array<SimpleOrder>;

  constructor(name: string, menus: Array<SimpleOrder> = new Array<SimpleOrder>()) {
    this.name = name;
    this.menus = menus;
  }
}*/

export class SimpleOrder {
  menu: string;
  qty: number;
  price: number;
  tableNo: number;

  constructor(menu: string, qty: number, price: number, tableNo: number) {
    this.menu = menu;
    this.qty = qty;
    this.price = price;
    this.tableNo = tableNo;
  }

  static from(order: Order): SimpleOrder {
    return new SimpleOrder(order.menu, order.qty, order.price, order.tableNo);
  }
}