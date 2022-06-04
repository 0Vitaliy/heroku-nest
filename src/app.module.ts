import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Vitalii:admin@cluster0.1wgh9.mongodb.net/music?retryWrites=true&w=majority'),
    UsersModule,
    TrackModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
