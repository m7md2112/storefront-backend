import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DATABASE,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

export const client = new Pool({
    host: POSTGRES_HOST,
    port: Number(POSTGRES_PORT),
    database: POSTGRES_DATABASE,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
})