import supertest from "supertest";

import { app } from "../../../server";

const appServer = supertest(app);

describe("/api/user", () => {
  it("should create a new user", async () => {
    const res = await appServer
      .post("/api/user")
      .send({ first_name: "First", last_name: "Last", password: "password" });
    expect(res.status).toBe(200);
  });

  it("should login", async () => {
    const res = await appServer
      .post("/api/user/login")
      .send({ id: "3", password: "password" });
    expect(res.status).toBe(200);
  });

  it("shouldn't delete user", async () => {
    const res = await appServer.delete("/api/user/1").send();
    expect(res.status).toBe(401);
  });

  it("shouldn't update user", async () => {
    const res = await appServer
      .patch("/api/user/")
      .send({ first_name: "First", last_name: "Last" });
    expect(res.status).toBe(401);
  });
});
