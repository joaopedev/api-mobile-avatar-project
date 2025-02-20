import type { Knex } from "knex";
import { onUpdateTrigger } from "../src/utils/onUpdateTrigger";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("usuarios", function (table) {
      table.increments("id").primary();
      table.string("email", 320).notNullable().index().unique();
      table.string("password", 255).notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table.string("password_reset_token");
      table.timestamp("passwordReset_expires");
    })
    .then(() => {
      knex.raw(onUpdateTrigger("usuarios"));
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("usuarios");
}
