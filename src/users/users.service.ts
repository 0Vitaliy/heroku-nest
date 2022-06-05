import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'john',
  //     password: 'changeme',
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //   },
  // ];

  async findOne(username: string): Promise<any | undefined> {
    const tracks = await this.userModel.find()
    return tracks.find(user => user.username === username);
  }

  async create(req: CreateUserDto) {
    console.log(req.username, "UserName");
    const user = await this.userModel.create({ ...req });
    console.log(user);
    return user;
  }

  async getAllUsers() {
    const users = await this.userModel.find();
    return users
  }
}