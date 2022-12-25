import { OrderModel } from "./order.model";

const testOrderModel = new OrderModel();

describe("Order Model", () => {
  it("should create an order", async () => {
    const order = await testOrderModel.createOrderForUser({
      user_id: 1,
      status_id: 1,
    });
    expect(order).toBeDefined();
  });

  it("should add product to order", async () => {
    const order = await testOrderModel.addProductToOrder({
      product_id: 1,
      quantity: 1
    }, '1')
    expect(order).toBeDefined();
  })

  it("should delete order", async () => {
    const order = await testOrderModel.deleteOrderById('1')
    expect(order).toBeDefined();
  })

  it("should get products ordered by order id", async () => {
    const products = await testOrderModel.getProductsOrderByOrderId('1')
    expect(products).toBeDefined();
  })
});
