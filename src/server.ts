import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { routers } from "./routes/api/index.routers";

dotenv.config();

const app: express.Application = express();
const port = process.env.HTTP_PORT as string;

app.use(express.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

app.use("/api", routers);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
