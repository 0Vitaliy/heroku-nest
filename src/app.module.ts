import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Vitalii:admin@cluster0.1wgh9.mongodb.net/music?retryWrites=true&w=majority'),
    TrackModule,
    // AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
