import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginDto } from './dto/loginDto';
import { RegisterDto } from './dto/registerDto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getAllUsers() {
    return await this.userService.findAll();
  }

  @Mutation(() => User)
  async login(@Args('input') input: LoginDto) {
    return await this.userService.findByLogin(input);
  }

  @Mutation(() => User)
  async register(@Args('input') input: RegisterDto) {
    return await this.userService.createUser(input);
  }
}
