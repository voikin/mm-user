import { Injectable } from '@nestjs/common';
import { GetUserInfoDto, ReturnUserInfoDto } from './dtos/get-user-info.dto';

@Injectable()
export class UsersService {
  async getInfo(dto: GetUserInfoDto): Promise<ReturnUserInfoDto> {
    return [
      {
        field: 'triedRations',
        value: [1, 2, 3],
      },
      {
        field: 'preferences',
        value: [5, 6, 10],
      },
      {
        field: 'parameters',
        value: [{ height: 186 }, { weight: 75 }, { age: 20 }],
      },
    ];
  }
}
