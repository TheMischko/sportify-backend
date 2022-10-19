import fs from 'fs';
import mysql2 from 'mysql2'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export const seed = function (knex, Promise) {
  const sql = fs.readFileSync("./db/seed.sql").toString();
  return knex.raw(sql);
};
