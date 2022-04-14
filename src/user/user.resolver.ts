import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginDto, LoginResponse, RegisterDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  allUsers() {
    return this.userService.findAll();
  }

  @Mutation(() => LoginResponse)
  login(@Args('input') input: LoginDto) {
    return this.userService.login(input);
  }

  @Mutation(() => User)
  register(@Args('input') input: RegisterDto) {
    return this.userService.createUser(input);
  }
}
