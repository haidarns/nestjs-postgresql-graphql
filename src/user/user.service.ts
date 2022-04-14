import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './user.entity';

import { LoginDto, RegisterDto } from './user.dto';
import { JwtPayload } from './user.strategy';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(private readonly jwtService: JwtService) {}

  async createUser(createUserDto: RegisterDto): Promise<User> {
    const { email, password, fullname } = createUserDto;

    const emailFounds = await User.count({ where: { email } });

    if (emailFounds > 0) {
      throw new BadRequestException('This email already registered');
    }

    const user = User.create({ email, fullname, password });
    return user.save({ reload: true });
  }

  async login({ email, password }: LoginDto) {
    const user = await User.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!(await user.checkPassword(password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = { id: user.id, email: user.email };
    const token = this.jwtService.sign(payload);
    return { ...payload, token };
  }

  findAll(): Promise<User[]> {
    return User.find();
  }
}
