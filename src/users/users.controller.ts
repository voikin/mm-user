import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetDataDto } from './dtos/getData.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('')
  async getUserData(@Body() getDataDto: GetDataDto) {}
}
