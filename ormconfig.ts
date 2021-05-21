import configuration from 'src/config/configuration'

const {host, port, username, password, database } = configuration().database

export = {
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  entities: ['./src/**/*.entity.ts'],
  migrations: ['migrations/*.ts'],
  cli: {
      migrationsDir: 'migrations'
  },
}
