import { dbClient, PASSWORD_PEPPER, SALT_ROUND } from "../database";
import * as bcrypt from "bcrypt";

export interface userType {
  id?: number;
  first_name: string;
  last_name: string;
  password: string;
}

export class UserModel {
  async createUser(user: userType): Promise<unknown> {
    if (
      user.first_name === undefined ||
      user.last_name === undefined ||
      user.password === undefined
    ) {
      return "cannot create user without first and last name and password";
    }

    const hashedPassword = bcrypt.hashSync(
      `${user.password}${PASSWORD_PEPPER as string}`,
      Number(SALT_ROUND)
    );

    const conn = await dbClient.connect();
    const sql = `insert into users (first_name, last_name, password) values ($1,$2,$3) RETURNING *`;
    const result = await conn.query(sql, [
      user.first_name,
      user.last_name,
      hashedPassword,
    ]);
    await conn.release();
    return result.rows;
  }

  async loginUser(
    id: string,
    inputPassword: string
  ): Promise<userType | undefined> {
    const conn = await dbClient.connect();
    const sql = `select password from users where id = $1`;
    const result = await conn.query(sql, [id]);
    const { password } = result.rows[0];
    const isUserLogIn: boolean = bcrypt.compareSync(
      `${inputPassword}${PASSWORD_PEPPER as string}`,
      password
    );
    if (isUserLogIn) {
      const sql = `select id, first_name, last_name from users where id = $1`;
      const result = await conn.query(sql, [id]);
      return result.rows[0];
    }
    await conn.release();
  }

  async getAllUsers(): Promise<userType[]> {
    const conn = await dbClient.connect();
    const sql = `select * from users`;
    const result = await conn.query(sql);
    return result.rows;
  }

  async deleteUserById(id: string): Promise<[]> {
    const conn = await dbClient.connect();
    const sql = `delete from users where id = $1 RETURNING *`;
    const result = await conn.query(sql, [id]).catch(console.error);
    await conn.release();
    return result?.rows[0];
  }

  async getUserById(id: string): Promise<userType> {
    const conn = await dbClient.connect();
    const sql = `select * from users where id = $1`;
    const { rows } = await conn.query(sql, [id]);
    const user = rows[0];
    conn.release();
    return user;
  }

  async updateUserData(user: userType): Promise<unknown> {
    const conn = await dbClient.connect();
    const sql =
      "UPDATE users SET first_name=$2, last_name= $3, password=$4 WHERE id=$1 RETURNING *";
    const result = await conn
      .query(sql, [user.id, user.first_name, user.last_name, user.password])
      .catch(console.error);
    conn.release();
    return result?.rows;
  }
}
