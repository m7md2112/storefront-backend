import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { PRIVATE_KEY } from "../database";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const auth = req.headers.authorization;
  if (typeof auth !== "undefined") {
    const [bearer, token] = auth.split(" ");

    if (bearer.toLowerCase() === "bearer") {
      try {
        jwt.verify(token, PRIVATE_KEY as string);
        next();
      } catch (err) {
        res.status(401).send(err);
      }
    }
  }
  res.status(401).send("Unauthorized");
};
