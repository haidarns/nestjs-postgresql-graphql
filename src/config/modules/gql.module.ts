import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('graphql'),
        autoSchemaFile: 'schema/schema.gql',
        sortSchema: true,
        formatError: (error: GraphQLError) => {
          const errorPayload = {
            ...error.extensions?.exception?.response,
          };

          if (error.extensions?.exception?.status >= 500) {
            errorPayload.stacktrace = error.extensions?.exception?.stacktrace;
          }

          const graphQLFormattedError: GraphQLFormattedError = errorPayload;

          return graphQLFormattedError;
        },
      }),
    }),
  ],
})
export class GraphqlConfigModule {}
