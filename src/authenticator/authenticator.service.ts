import { Injectable } from '@nestjs/common';
import { Account } from '../types/account.entity';
import { AccountService } from '../account/account.service';

@Injectable()
export class AuthenticatorService {
  constructor(private accountService: AccountService) {}

  public async authenticate(id: string, password: string): Promise<string | undefined> {
    // DB에서 데이터를 받고 이를 ID/PASSWORD 체크
    const account = await this.accountService.findOne(id, password);
    if (account) {
      // 맞는 데이터일 경우
      // JWT 토큰 생성 및 데이터베이스에 저장
      const jwt = '';
      return jwt;
    }
    // throw LoginFailureException();
    return undefined;
  }

  public isValidate(jwt: string): boolean {
    if (true) return true;
    return false;
  }
}
