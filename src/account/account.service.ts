import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { Account } from '../types/account.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountService {s
  constructor(@InjectRepository(Account) private accountRepository: Repository<Account>) {}

  async findOne(id: string, password: string): Promise<Account> {
    return this.accountRepository.findOne({
      where: { id: id, password: password },
    });
  }
}
