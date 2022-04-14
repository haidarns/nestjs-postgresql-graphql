# NestJS - PostgreSQL - GraphQL Starter Kit

## Description

A starter kit for NestJS development with PostgreSQL & GraphQL enabled.

## Installation

```bash
$ npm install
```

## Migration Commands

A. Create Migration
```bash
npm run makemigration <migration_name>
```

B. Running Migration
```bash
npm run migrate
```

C. Show Migration List
```bash
npm run typeorm migration:show
```

## Running the app

> For local development, start postgresql container first : `docker-compose up -d`

```bash
# local
$ npm run local

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## System Information

```
[System Information]
OS Version     : Linux 5.13
NodeJS Version : v14.19.1
PNPM Version    : 6.32.6 

[Nest CLI]
Nest CLI Version : 8.2.5 

[Nest Platform Information]
platform-express version : 8.4.4
schematics version       : 8.0.10
passport version         : 8.2.1
graphql version          : 10.0.8
typeorm version          : 8.0.3
testing version          : 8.4.4
apollo version           : 10.0.8
common version           : 8.4.4
config version           : 2.0.0
core version             : 8.4.4
jwt version              : 8.0.0
cli version              : 8.2.5
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
