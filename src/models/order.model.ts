import { dbClient } from "../database";

export interface orderRecord {
  id?: number;
  user_id: number;
  status_id: number;
}

export interface order_item {
  id?: number;
  order_id?: number;
  product_id: number;
  quantity: number;
}

export class OrderModel {
  async createOrderForUser(order: orderRecord): Promise<unknown> {
    if (order.user_id === undefined || order.status_id === undefined) {
      return "user_id and status_id are required";
    }
    const conn = await dbClient.connect();
    const sql = `insert into orders (user_id, status_id) values (${order.user_id}, ${order.status_id}) RETURNING *`;
    const result = await conn.query(sql);
    conn.release();
    return result.rows[0];
  }

  async addProductToOrder(order: order_item, id: string): Promise<unknown> {
    if (order.product_id === undefined || order.quantity === undefined) {
      return "order_id, product_id and quantity are required";
    }
    const conn = await dbClient.connect();
    const sql = `insert into products_orders (order_id, product_id, quantity) VALUES (${id}, ${order.product_id}, ${order.quantity}) RETURNING *`;
    const result = await conn.query(sql);
    conn.release();
    return result.rows[0];
  }

  async deleteOrderById(orderId: string): Promise<unknown> {
    const conn = await dbClient.connect();
    const sql = `delete from orders where id = ${orderId} RETURNING *`;
    const result = await conn.query(sql);
    conn.release();
    return result.rows[0];
  }

  async getProductsOrderByOrderId(orderId: string): Promise<unknown> {
    const conn = await dbClient.connect();
    const sql = `select 
       products_orders.order_id, 
       orders.user_id, 
       products_orders.product_id, 
       products_orders.quantity, 
       orders.status_id 
        from products_orders  
        INNER JOIN orders ON products_orders.order_id = ${orderId} AND orders.id = ${orderId}`;
    const result = await conn.query(sql);
    conn.release();
    return result.rows;
  }
}
