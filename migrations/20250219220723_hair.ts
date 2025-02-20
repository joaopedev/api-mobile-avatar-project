import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("hairs", function (table) {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.string("image", 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("hairs");
}
