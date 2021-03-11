import { IsNotEmpty, IsString, Length } from 'class-validator';

export interface User {
  // @IsNotEmpty()
  // @Length(6, 10)
  // @IsString()
  username: string;
}
