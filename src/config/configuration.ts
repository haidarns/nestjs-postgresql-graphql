

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,

  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USER || 'dev',
    password: process.env.DB_PASS || 'dev',
    database: process.env.DB_NAME || 'dev',
    synchronize: process.env.NODE_ENV === 'local',
  },

  graphql: {
    debug: process.env.GRAPHQL_DEBUG || true,
    playground: process.env.GRAPHQL_PLAYGROUND || true,
  }
});
