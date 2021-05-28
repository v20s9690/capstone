import { BaseEntity, Column, Entity } from "typeorm";

@Entity({ name: 'capstone_order' })
export class Order extends BaseEntity {
  @Column({ name: 'order_menu', length: 128, nullable: false })
  menu: string;
  @Column({ name: 'order_qty', nullable: false })
  qty: number;
  @Column({ name: 'order_price', nullable: false })
  price: number;
}