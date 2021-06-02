import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'capstone_order' })
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'order_id'})
  id: number; //주문 순서를 위한 id
  @Column({ name: 'order_menu', length: 128, nullable: false })
  menu: string; //주문된 메뉴
  @Column({ name: 'order_qty', nullable: false })
  qty: number; //메뉴의 수량
  @Column({ name: 'order_price', nullable: false })
  price: number; //메뉴의 가격
  @Column({ name: 'order_tableNo', nullable: false})
  tableNo: number;
}