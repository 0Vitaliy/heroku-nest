import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot('mongodb+srv://Vitalii:admin@cluster0.1wgh9.mongodb.net/music?retryWrites=true&w=majority'),
    TrackModule,
    AuthModule,
    FileModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
