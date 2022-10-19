# 4IT580: Backend

## Requirements

- Node.js v12 (or later)
- Yarn (`npm install --global yarn`)

## Setup ENV Variables

```
cp ./.env.example ./.env
```

Edit `.env` file (DB user, password, ...)

## Install Dependencies

```bash
yarn install
```

## `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

## Seed Database

To seed a new database you have to run this command:
```bash
npx knex seed:run
```

## Run Production

```bash
yarn start
```

## Build Production

```bash
yarn build
```

### Build Production and Watch for Changes

```bash
yarn build:watch
```
