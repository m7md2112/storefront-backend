import { Request, Response } from "express";
import { UserModel, userType } from "../models/user.model";
import { PRIVATE_KEY } from "../database";
import jwt from "jsonwebtoken";

const userModel = new UserModel();

export const createUser = (req: Request, res: Response): void => {
  userModel
    .createUser(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

export const loginUser = (req: Request, res: Response): void => {
  const { id, password } = req.body;
  userModel
    .loginUser(id, password)
    .then((result) => {
      const token = jwt.sign(result as userType, PRIVATE_KEY as string);
      res.send({ ...result, token });
    })
    .catch((err) => {
      res.status(401).send(`${err.message as string}
      please enter user id and password as 

      {
        "id": 1,
        "password": "password" 
      }
      `);
    });
};
export const deleteUser = (req: Request, res: Response): void => {
  const id: string = req.params.id;
  userModel
    .deleteUserById(id)
    .then((result: []) => {
      res.send(`
    delete user status
      ${JSON.stringify(result)}
    `);
    })
    .catch((err) => {
      res.send(err.message);
    });
};
export const getAllUsers = (req: Request, res: Response): void => {
  userModel
    .getAllUsers()
    .then((result) => {
      res.send(`
    get all users status
      ${JSON.stringify(result)}
    `);
    })
    .catch(console.log);
};

export const updateUserData = (req: Request, res: Response): void => {
  userModel
    .updateUserData(req.body)
    .then((result) => {
      res.send(`
    update user data status
      ${JSON.stringify(result)}
    `);
    })
    .catch(console.log);
};

export const getUserById = (req: Request, res: Response): void => {
  const id: string = req.params.id;
  userModel
    .getUserById(id)
    .then((result) => {
      res.send(`
    get user status
      ${JSON.stringify(result)}
      `);
    })
    .catch(console.log);
};
