import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Length,
  MaxLength,
} from 'class-validator';

@InputType('LoginInput')
export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  @Field()
  readonly email: string;

  @Field()
  @IsNotEmpty()
  readonly password: string;
}

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

@ObjectType()
export class LoginResponse {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  token: string;
}
