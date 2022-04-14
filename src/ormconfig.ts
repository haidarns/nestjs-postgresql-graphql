import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import configuration from './config';

const { host, port, username, password, database } = configuration().database;

export = <PostgresConnectionOptions>{
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  entities: ['**/*.entity.js', '**/entities/*.entity.js'],
  migrations: ['migrations/*.js'],
  cli: {
    migrationsDir: '../src/migrations',
  },
};
