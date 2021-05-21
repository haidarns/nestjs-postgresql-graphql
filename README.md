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
OS Version     : Linux 5.4
NodeJS Version : v14.17.0
NPM Version    : 6.14.13 

[Nest CLI]
Nest CLI Version : 7.6.0 

[Nest Platform Information]
platform-express version : 7.6.17
graphql version          : 7.10.6
typeorm version          : 7.1.5
common version           : 7.6.17
config version           : 0.6.3
core version             : 7.6.17
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
