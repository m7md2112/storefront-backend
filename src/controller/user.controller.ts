import { Request, Response } from "express";
import { UserModel } from "../models/user.model";

const userModel = new UserModel();

export const createUser = (req: Request, res: Response): void => {
  userModel
    .createUser(req.body)
    .then((result) => {
      res.send(`
  create user status 
  ${JSON.stringify(result)}
  `);
    })
    .catch((err) => {
      res.send(err.message);
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
