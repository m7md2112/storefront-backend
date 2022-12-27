import supertest from "supertest";

import { app } from "../../../server";

const appServer = supertest(app);

const testToken: string = process.env.TEST_TOKEN as string;
describe("/api/order", () => {
  it("create order", async () => {
    const res = await appServer
      .post("/api/order")
      .set("Authorization", "Bearer " + testToken)
      .send({
        user_id: 1,
        status_id: 1,
      });
    expect(res.status).toBe(200);
  });

  it("add product to order", async () => {
    const res = await appServer
      .post("/api/order/1")
      .set("Authorization", "Bearer " + testToken)
      .send({
        product_id: 2,
        quantity: 6,
      });
    expect(res.status).toBe(200);
  });

  it("get all order products", async () => {
    const res = await appServer
      .get("/api/order/1")
      .set("Authorization", "Bearer " + testToken)
      .send();
    expect(res.status).toBe(200);
  });

  it("delete order", async () => {
    const res = await appServer
      .delete("/api/order/4")
      .set("Authorization", "Bearer " + testToken)
      .send();
    expect(res.status).toBe(200);
  });
});
