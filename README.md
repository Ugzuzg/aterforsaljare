# Återförsäljare

[![Test Coverage](https://api.codeclimate.com/v1/badges/b6f019209b84296f7a40/test_coverage)](https://codeclimate.com/github/Ugzuzg/aterforsaljare/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/b6f019209b84296f7a40/maintainability)](https://codeclimate.com/github/Ugzuzg/aterforsaljare/maintainability)
[![Tests](https://github.com/Ugzuzg/aterforsaljare/actions/workflows/test.yml/badge.svg)](https://github.com/Ugzuzg/aterforsaljare/actions/workflows/test.yml)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# To run tests, provide a postgres connection string in the DATABASE_URL environment variable. Or use docker-compose:
$ docker-compose up -d

# Next, apply database migrations:
$ env $(cat .env.development) npx prisma migrate deploy

# development
$ env $(cat .env.development) npm run start
```

## Test

```bash
# run tests
$ npm run test

# test coverage
$ npm run test:cov
```
