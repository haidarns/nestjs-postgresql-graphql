import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/registerDto';
import { LoginDto } from './dto/loginDto';
import { User } from './user.entity';

import * as Argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: RegisterDto): Promise<User> {
    const { email, password, fullname } = createUserDto;

    const emailIsExists = await this.userRepository.findOne({ email });

    if (emailIsExists) {
      throw new BadRequestException('This email already registered');
    }

    const user = this.userRepository.create({ email, fullname, password });
    await this.userRepository.save(user);
    return user;
  }

  async findByLogin({ email, password }: LoginDto): Promise<User> {
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const hashCheck = await Argon2.verify(user.password, password);

    if (!hashCheck) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async findAll() {
    return await this.userRepository.find();
  }
}
