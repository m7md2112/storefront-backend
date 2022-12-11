import express, { Request, Response } from "express";
// import bodyParser from 'body-parser'
import dotenv from "dotenv";
import { client } from "./database";

dotenv.config();

const app: express.Application = express();
const port = process.env.HTTP_PORT as string;

app.use(express.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
