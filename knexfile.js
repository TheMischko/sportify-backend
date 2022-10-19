import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} from './src/config/variables.js'

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: "mysql2",
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      multipleStatements: true,
    },
    seeds: {
      directory: "./db/"
    },
    useNullAsDefault: true,
  },

  production: {
    client: "mysql2",
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      multiStatements: true,
    },
    useNullAsDefault: true,
  },


};
