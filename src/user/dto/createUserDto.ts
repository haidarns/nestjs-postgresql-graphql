import { IsEmail, IsNotEmpty, IsOptional, Length, MaxLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 24)
  password: string;

  @MaxLength(50)
  @IsOptional()
  fullname: string
}