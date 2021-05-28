import { BaseEntity, Column, Entity } from "typeorm";

@Entity({ name: 'capstone_order' })
export class Menu extends BaseEntity {
  @Column({ name: 'order_menu', length: 128, nullable: false })
  category: string;
  @Column({ name: 'order_qty', primary: true })
  qty: number;
  @Column({ name: 'order_price', nullable: false })
  price: number;
}