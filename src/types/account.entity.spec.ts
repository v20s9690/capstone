import { Account } from './account.entity';
import { CategoryMenus } from "./category-menus.class";
import { Menu } from "./menu.entity";

describe('Account', () => {
  it('should be defined', () => {
    expect(new Account()).toBeDefined();
  });
});
