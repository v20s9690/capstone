import { BaseEntity, Column, Entity } from "typeorm";

@Entity({ name: 'capstone_menu' })
export class Menu extends BaseEntity {
  @Column({ name: 'menu_category', length: 128, nullable: false })
  category: string;
  @Column({ name: 'menu_id', primary: true })
  id: number;
  @Column({ name: 'menu_name', length: 128, nullable: false })
  menu: string;
  @Column({ name: 'menu_img', length: 128, nullable: false })
  img: string
  @Column({ name: 'menu_price', nullable: false })
  price: number;
}
