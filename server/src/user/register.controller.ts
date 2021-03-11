import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('register')
export class RegisterController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() user: User): Promise<any> {
    return this.userService.create(user);
  }
}
