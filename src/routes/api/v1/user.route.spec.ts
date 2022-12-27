import supertest from "supertest";

import { app } from "../../../server";

const appServer = supertest(app);

const testToken: string = process.env.TEST_TOKEN as string;

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
      .send({ id: "1", password: "Password" });
    expect(res.status).toBe(200);
  });

  it("should get user data", async () => {
    const res = await appServer.get("/api/user/1").set('Authorization', 'Bearer ' + testToken);
    expect(res.status).toBe(200);
  });

  it("should update user", async () => {
    const res = await appServer
      .patch("/api/user/")
      .set('Authorization', 'Bearer ' + testToken)
      .send({ id: 3, first_name: "First", last_name: "Last" });
    expect(res.status).toBe(200);
  });

    it("should delete user", async () => {
      const res = await appServer.delete("/api/user/3")
        .set('Authorization', 'Bearer ' + testToken)
        .send();
      expect(res.status).toBe(200);
    });
});
