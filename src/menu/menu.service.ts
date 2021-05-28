import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Menu } from "../types/menu.entity";
import { Repository } from "typeorm";

@Injectable()
export class MenuService {
  constructor(@InjectRepository(Menu) private menuRepository: Repository<Menu>){}

  async findOne(name: string): Promise<Menu> {
    return this.menuRepository.findOne({
      where: { menu: name }
    });
  }

  async findAll(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  async findByCategory(categoryName: string): Promise<Menu[]> {
    return this.menuRepository.find({
      where: {category: categoryName},
      order: { category: "ASC" }
    });
  }
}
