
exports.up = function(knex) {
    return knex.schema.createTable('clients', function(table) {
      table.increments()
      table.string('name').unique().notNullable()
      table.string('email').unique().notNullable()
      table.string('phone').notNullable()
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now())
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now())
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('clients')
  };
  