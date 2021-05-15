import { BaseEntity, Column, Entity } from "typeorm";

@Entity({ name: 'capstone_account' })
export class Account extends BaseEntity {
  @Column({ name: 'account_name', length: 64, primary: true })
  id: string;
  @Column({ name: 'account_password', length: 128, nullable: false })
  password: string;
}
