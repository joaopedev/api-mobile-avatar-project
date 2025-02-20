import knex from "knex";
import { ClothersAvatarModel } from "../models/model";

export class Clothers {
    public static async getClothers(
        id?: string | undefined
    ): Promise<ClothersAvatarModel[]> {
        let sql = knex("earrings").select("*").orderBy("id");
        if (id) sql.where("id", id);
        return sql;
    }

    public static async getClothersById(id: string): Promise<ClothersAvatarModel | null> {
        const earrings = await knex("earrings").select("*").where("id", id).first();

        return earrings || null;
    }

    public static async updateClothers(
        id_earrings: string,
        earrings: ClothersAvatarModel
    ): Promise<boolean> {
        const earringsUpdated = await knex("earrings")
        .where("id", id_earrings)
        .update(earrings);

        return earringsUpdated > 0;
    }

    public static async deleteClothers(id_earrings: string): Promise<boolean> {
        const earrings = await knex("earrings")
        .select("earrings")
        .where("id", id_earrings)
        .delete();

        return earrings > 0;
    }


}