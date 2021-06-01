import { SimpleOrder } from "./order-menus.class";

export class RequestedOrder {
  order: Array<SimpleOrder>;

  constructor(order: Array<SimpleOrder>) {
    this.order = order;
  }
}