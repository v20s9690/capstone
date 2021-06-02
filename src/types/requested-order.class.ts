import { SimpleOrder } from "./order-menus.class";

export class RequestedOrder {
  result: Array<SimpleOrder> = new Array<SimpleOrder>();

  constructor(order: Array<SimpleOrder>) {
    this.result = order;
  }
}
