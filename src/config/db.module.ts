import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (
        configService: ConfigService,
      ): PostgresConnectionOptions => ({
        ...configService.get('database'),
        type: 'postgres',
        entities: ['dist/**/*.entity.js', 'dist/**/entities/*.entity.js'],
      }),
    }),
  ],
})
export class DbConfigModule {}
