import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DbConfigModule } from './config/modules/db.module';
import { GraphqlConfigModule } from './config/modules/gql.module';
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
