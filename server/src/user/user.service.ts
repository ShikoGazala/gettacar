import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<any>) {}

  async findAll() {
    return await this.userModel.find();
  }

  async create(user) {
    const allUsers = (await this.findAll()).map((user) => user.username);

    if (allUsers.includes(user.username)) {
      return { userExists: true };
    }
    const newUser = new this.userModel(user);
    await newUser.save();
    return { userExists: false };
  }
}
