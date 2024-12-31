import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async findOne(email: string): Promise<User> {
    return this.userModel
      .where({
        email: email
      })
      .findOne()
  }

  async create(firstname: string, lastname: string, email: string, password:string) {
    const newUser = new this.userModel({firstname, lastname, email, password});
    return newUser.save();
  }

}
