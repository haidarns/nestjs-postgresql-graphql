import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration, { DbConfigModule, GraphqlConfigModule } from './config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      cache: true,
    }),
    DbConfigModule,
    GraphqlConfigModule,
    UserModule,
  ],
})
export class AppModule {}
