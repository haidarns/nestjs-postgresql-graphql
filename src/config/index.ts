import { DbConfigModule } from './db.module';
import { GraphqlConfigModule } from './gql.module';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,

  urlPrefix: process.env.URL_PREFIX || '',

  secretKey: process.env.SECRET_KEY || '',

  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USER || 'dev',
    password: process.env.DB_PASS || 'dev',
    database: process.env.DB_NAME || 'dev',
    synchronize: process.env.DB_SYNCHRONIZE?.toLowerCase() === 'true',
  },

  graphql: {
    debug: process.env.GRAPHQL_DEBUG?.toLowerCase() !== 'false',
    playground: process.env.GRAPHQL_PLAYGROUND?.toLowerCase() !== 'false',
  },
});

export { DbConfigModule, GraphqlConfigModule };
