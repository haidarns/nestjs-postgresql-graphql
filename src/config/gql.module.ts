import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverAsyncConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverAsyncConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('graphql'),
        path: `${configService.get<string>('urlPrefix')}/graphql`,

        autoSchemaFile: 'schema/schema.gql',
        sortSchema: true,
      }),
    }),
  ],
})
export class GraphqlConfigModule {}
