import supertest from "supertest";

import { app } from "../../../server";

const appServer = supertest(app);

describe("/api/order", () => {
  it("not create order", async () => {
    const res = await appServer.post("/api/order").send({
      user_id: 1,
      status_id: 1,
    });
    expect(res.status).toBe(401);
  });

  it("not add product to order", async () => {
    const res = await appServer.post("/api/order/1").send({
      product_id: 2,
      quantity: 6,
    });
    expect(res.status).toBe(401);
  });

  it("not get all order products", async () => {
    const res = await appServer.get("/api/order/1").send();
    expect(res.status).toBe(401);
  });

  it("not delete order", async () => {
    const res = await appServer.delete("/api/order/1").send();
    expect(res.status).toBe(401);
  });
});
