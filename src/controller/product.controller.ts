import { Request, Response } from "express";
import { ProductModel } from "../models/product.model";

const productModel = new ProductModel();

export const createProduct = (req: Request, res: Response): void => {
  productModel
    .createProduct(req.body)
    .then((result) => {
      res.send(`
  create product: 
  ${JSON.stringify(result)}
  `);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

export const deleteProduct = (req: Request, res: Response): void => {
  const id: string = req.params.id;
  productModel
    .deleteProductById(id)
    .then((result) => {
      res.send(`
    delete product:
      ${JSON.stringify(result)}
    `);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

export const getAllProducts = (req: Request, res: Response): void => {
  productModel
    .getProducts()
    .then((result) => {
      res.send(`
    get all products:
      ${JSON.stringify(result)}
    `);
    })
    .catch(console.log);
};

export const getProductById = (req: Request, res: Response): void => {
  const id: string = req.params.id;
  productModel
    .getProductById(id)
    .then((result) => {
      res.send(`
    get Product By Id:
      ${JSON.stringify(result)}
      `);
    })
    .catch(console.log);
};
