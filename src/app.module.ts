import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Vitalii:admin@cluster0.1wgh9.mongodb.net/test'),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
