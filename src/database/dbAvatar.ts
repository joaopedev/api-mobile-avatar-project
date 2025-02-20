import { knex } from "../connectDB";
import { AvatarModel } from "../models/model";

export class Avatar {
  public static async getAvatars(
    id?: string | undefined
  ): Promise<AvatarModel[]> {
    let sql = knex("avatars").select("*").orderBy("id");
    if (id) sql.where("id", id);
    return sql;
  }

  public static async getAvatarById(id: string): Promise<AvatarModel | null> {
    const avatar = await knex("avatars").select("*").where("id", id).first();

    return avatar || null;
  }

  public static async updateAvatar(
    id_avatar: string,
    avatar: AvatarModel
  ): Promise<boolean> {
    const avatarUpdated = await knex("avatars")
      .where("id", id_avatar)
      .update(avatar);

    return avatarUpdated > 0;
  }

  public static async deleteAvatar(id_avatar: string): Promise<boolean> {
    const avatar = await knex("avatars")
      .select("avatars")
      .where("id", id_avatar)
      .delete();

    return avatar > 0;
  }

  public static async createAvatar(avatar: AvatarModel): Promise<boolean> {
    const avatarCreated = await knex("avatars").insert(avatar);

    return avatarCreated.length > 0;
  }
}
