import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Length,
  MaxLength,
} from 'class-validator';

@InputType('RegisterInput')
export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @Length(6, 24)
  @Field()
  password: string;

  @MaxLength(50)
  @IsOptional()
  @Field({ nullable: true })
  fullname: string;
}
