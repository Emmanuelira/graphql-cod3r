// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  client: 'mysql',
  connection: {
    database: 'proj-bd',
    user: 'root',
    password: 'passw@1234'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
