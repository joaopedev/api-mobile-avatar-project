import knex from "knex";
import { TasksModel } from "../models/model";

export class Tasks {
  public static async getTasks(id?: string | undefined): Promise<TasksModel[]> {
    let sql = knex("tasks").select("*").orderBy("id");
    if (id) sql.where("id", id);
    return sql;
  }

    public static async getTasksById(id: string): Promise<TasksModel | null> {
        const tasks = await knex("tasks").select("*").where("id", id).first();
    
        return tasks || null;
    }

    public static async updateTasks(
        id_tasks: string,
        tasks: TasksModel
    ): Promise<boolean> {
        const tasksUpdated = await knex("tasks")
        .where("id", id_tasks)
        .update(tasks);
    
        return tasksUpdated > 0;
    }

    public static async deleteTasks(id_tasks: string): Promise<boolean> {
        const tasks = await knex("tasks")
        .select("tasks")
        .where("id", id_tasks)
        .delete();
    
        return tasks > 0;
    }

    public static async createTasks(tasks: TasksModel): Promise<boolean> {
        const tasksCreated = await knex("tasks").insert(tasks);
    
        return tasksCreated.length > 0;
    }
}
