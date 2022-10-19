import mariadb from 'mariadb';
import knex from 'knex';
import knexfile from '../../knexfile'

/**
 * 
 * @returns knex
 */
export const getConnection = () => {
  try{
    const conn = knex(knexfile["development"])
    return conn;
  } catch (err) {
    console.log('err', err);
  }
}
