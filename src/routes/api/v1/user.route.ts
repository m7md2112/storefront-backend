import express from "express";
import { authMiddleware } from "../../../middleware/auth.middleware";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUserData,
  loginUser
} from "../../../controller/user.controller";

export const userRouter = express.Router();

userRouter.post("/", authMiddleware, createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/:id", authMiddleware, deleteUser);
userRouter.get("/:id", authMiddleware, getUserById);
userRouter.get("/", authMiddleware, getAllUsers);
userRouter.patch("/", authMiddleware, updateUserData);
