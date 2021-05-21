import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
        type: 'postgres',
        entities: ['**/*.entity.js'],
        synchronize: configService.get('env') == 'local',
      }),
    }),
  ],
})
export class DbConfigModule {}
