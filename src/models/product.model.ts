import { dbClient } from "../database";

export interface Product {
  id?: Number;
  name: string;
  price: number;
}

export class ProductModel {
  async createProduct(product: Product): Promise<unknown> {
    if (product.price === undefined || product.name === undefined) {
      throw new Error(
        `Product name and price must be defined
        {
          "name": "product name",
          "price": "product price"
        }
        `
      );
    }
    const conn = await dbClient.connect();
    const sql =
      "insert into products (name, price) values ($1, $2) RETURNING *";
    const result = await conn
      .query(sql, [product.name, product.price])
      .catch(console.log);
    conn.release();
    return result?.rows[0];
  }

  async getProducts(): Promise<Product[]> {
    const conn = await dbClient.connect();
    const sql = "select * from products order by name";
    const result = await conn.query(sql);
    conn.release();
    return result.rows;
  }

  async getProductById(productId: string): Promise<Product> {
    const conn = await dbClient.connect();
    const sql = "select * from products where id = $1";
    const result = await conn.query(sql, [productId]);
    conn.release();
    return result.rows[0];
  }

  async deleteProductById(productID: string): Promise<unknown> {
    const conn = await dbClient.connect();
    const sql = "delete from products where id = $1 RETURNING *";
    const result = await conn.query(sql, [productID]).catch(console.error);
    conn.release();
    return result?.rows[0];
  }
}
