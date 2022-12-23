import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
} from "../../../controller/product.controller";
import { authMiddleware } from "../../../middleware/auth.middleware";

export const productRouter = express.Router();

productRouter.post("/", authMiddleware, createProduct);
productRouter.delete("/:id", authMiddleware, deleteProduct);
productRouter.get("/:id", authMiddleware, getProductById);
productRouter.get("/", authMiddleware, getAllProducts);
