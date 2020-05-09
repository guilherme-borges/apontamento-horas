
exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table) {
      table.increments()
      table.string('name').notNullable()
      table.string('status').notNullable().defaultTo('Em Andamento')
      table.integer('client_id').notNullable()
      table.foreign('client_id').references('id').inTable('clients').onDelete('RESTRICT').onUpdate('CASCADE')
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now())
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now())
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('projects')
  };
  