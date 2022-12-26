import supertest from "supertest";

import { app } from "../../../server";

const appServer = supertest(app);

describe("/api/product/", () => {
  it("shouldn't create a new product", async () => {
    const response = await appServer.post("/api/product/").send({
      name: "product name",
      price: 55,
    });
    expect(response.status).toBe(401);
  });

  it("should get all products", async () => {
    const response = await appServer.get("/api/product/");
    expect(response.status).toBe(200);
  });

  it("should get product by id", async () => {
    const response = await appServer.get("/api/product/1");
    expect(response.status).toBe(200);
  });

  it("shouldn't delete a product", async () => {
    const response = await appServer.delete("/api/product/1");
    expect(response.status).toBe(401);
  });
});
