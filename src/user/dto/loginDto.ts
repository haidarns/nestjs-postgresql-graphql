import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

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
