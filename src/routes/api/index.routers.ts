import express from "express";
import { userRouter } from "./v1/user.route";
import { productRouter } from "./v1/product.route";
import { orderRouter } from "./v1/order.route";

export const routers = express.Router();

routers.use("/user", userRouter);
routers.use("/product", productRouter);
routers.use("/order", orderRouter);
