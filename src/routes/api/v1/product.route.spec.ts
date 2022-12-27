import supertest from "supertest";

import { app } from "../../../server";

const appServer = supertest(app);
const testToken: string = process.env.TEST_TOKEN as string;

describe("/api/product/", () => {
  it("should create a new product", async () => {
    const response = await appServer.post("/api/product/").set('Authorization', 'Bearer ' + testToken).send({
      name: "product name",
      price: 55,
    });
    expect(response.status).toBe(200);
  });

  it("should get all products", async () => {
    const response = await appServer.get("/api/product/");
    expect(response.status).toBe(200);
  });

  it("should get product by id", async () => {
    const response = await appServer.get("/api/product/1");
    expect(response.status).toBe(200);
  });

  it("should delete a product", async () => {
    const response = await appServer.delete("/api/product/1").set('Authorization', 'Bearer ' + testToken);
    expect(response.status).toBe(200);
  });
});
