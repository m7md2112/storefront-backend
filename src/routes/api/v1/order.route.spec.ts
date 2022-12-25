import supertest from "supertest";

import { app } from "../../../server";

const appServer = supertest(app);

describe("/api/order", () => {
  it("create order", async () => {
    const res = await appServer.post("/api/order").send({
      user_id: 7,
      status_id: 1
    })
    expect(res.status).toBe(200);
  });

  it("add product to order", async () => {
    const res = await appServer.post("/api/order/1").send({
      product_id: 2,
      quantity: 6
    })
    expect(res.status).toBe(200);
  })

  it("get all order products", async () => {
    const res = await appServer.get("/api/order/1").send()
    expect(res.status).toBe(200);
  })

  it("delete order", async () => {
    const res = await appServer.delete("/api/order/1").send()
    expect(res.status).toBe(200)
  })
});
