import express from "express";
import { authMiddleware } from "../../../middleware/auth.middleware";
import {
  createOrder,
  deleteOrder,
  addProductToOrder,
  getProductsOrderByOrderId
} from "../../../controller/order.controller";

export const orderRouter = express.Router();

orderRouter.post("/", authMiddleware, createOrder);
orderRouter.post("/:id", authMiddleware, addProductToOrder);
orderRouter.delete("/:id", authMiddleware, deleteOrder);
orderRouter.get("/:id", authMiddleware, getProductsOrderByOrderId);


