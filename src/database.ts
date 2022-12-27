import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DATABASE,
  POSTGRES_DATABASE_TEST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

let DATABASE: string = ""
if (process.env.NODE_ENV === "dev") {
  // @ts-ignore
  DATABASE = POSTGRES_DATABASE;
} else {
  // @ts-ignore
  DATABASE = POSTGRES_DATABASE_TEST;
}

console.log(process.env.NODE_ENV);
export const dbClient = new Pool({
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  database: DATABASE,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});

export const { SALT_ROUND, PASSWORD_PEPPER, PRIVATE_KEY } = process.env;
