import { Request, Response } from "express";
import { OrderModel } from "../models/order.model";

const orderModel = new OrderModel();

export const createOrder = (req: Request, res: Response): void => {
  orderModel
    .createOrderForUser(req.body)
    .then((result) => {
      res.send(`
  create Order: 
  ${JSON.stringify(result)}
  `);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

export const deleteOrder = (req: Request, res: Response): void => {
  const id: string = req.params.id;
  orderModel
    .deleteOrderById(id)
    .then((result) => {
      res.send(`
    delete Order:
      ${JSON.stringify(result)}
    `);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

export const addProductToOrder = (req: Request, res: Response): void => {
  orderModel
    .addProductToOrder(req.body, req.params.id)
    .then((result) => {
      res.send(`
  add Product to Order:
  ${JSON.stringify(result)}
  `);
    })
    .catch(console.log);
};

export const getProductsOrderByOrderId = (
  req: Request,
  res: Response
): void => {
  orderModel
    .getProductsOrderByOrderId(req.params.id)
    .then((result) => {
      res.send(`
    get all Products Order by Order ID:
      ${JSON.stringify(result)}
    `);
    })
    .catch(console.log);
};
