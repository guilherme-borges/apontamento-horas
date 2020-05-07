// Update with your config settings.

module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3'
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './src/database/migrations'
      },
      useNullAsDefault: true
    },
  
    staging: {
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        database: 'apontamento_horas',
        user:     'root',
        password: ''
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './src/database/migrations'
      }
    },
  
    production: {
      client: 'mysql',
      connection: {
        database: 'apontamento_horas',
        user:     'root',
        password: ''
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };
  