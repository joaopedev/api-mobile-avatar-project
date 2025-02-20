import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("avatars", function (table) {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.string("image", 255).notNullable();
    // Relacionamento com usuário
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("usuarios")
      .onDelete("CASCADE");
    // Relacionamento com roupas e acessórios
    table
      .integer("shoes_id")
      .unsigned()
      .references("id")
      .inTable("shoes")
      .onDelete("SET NULL");
    table
      .integer("dresses_id")
      .unsigned()
      .references("id")
      .inTable("dresses")
      .onDelete("SET NULL");
    table
      .integer("eyes_color_id")
      .unsigned()
      .references("id")
      .inTable("eyes")
      .onDelete("SET NULL");
    table
      .integer("earrings_id")
      .unsigned()
      .references("id")
      .inTable("earrings")
      .onDelete("SET NULL");
    table
      .integer("hair_id")
      .unsigned()
      .references("id")
      .inTable("hairs")
      .onDelete("SET NULL");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("avatars");
}