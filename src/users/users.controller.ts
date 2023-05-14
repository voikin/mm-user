import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserInfoDto } from './dtos/get-user-info.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('')
  async getUserData(@Body() dto: GetUserInfoDto) {
    return this.usersService.getInfo(dto);
  }
}
