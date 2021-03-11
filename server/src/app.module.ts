import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { defaultURIS } from './config/keys';
import { UserModule } from './user/user.module';
@Module({
  imports: [UserModule, MongooseModule.forRoot(defaultURIS.mongoURI)],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
