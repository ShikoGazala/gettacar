import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { RegisterController } from './register.controller';
import { UserService } from './user.service';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [RegisterController],
  providers: [UserService],
})
export class UserModule {}
