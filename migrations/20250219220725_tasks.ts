import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("tasks", function (table) {
    table.increments("id").primary();
    table.string("title", 255).notNullable();
    table.string("description", 255).notNullable();
    table.timestamp("date").defaultTo(knex.fn.now());
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("usuarios")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("tasks");
}
