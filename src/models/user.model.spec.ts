import { UserModel } from "./user.model";

const testUserModel = new UserModel();

describe("User Model", () => {
  let userId:string = ""
  it("should create a user", async () => {
    const user = await testUserModel.createUser({
      first_name: "John",
      last_name: "Doe",
      password: "password",
    });

    // @ts-ignore
    userId = await user[0].id ;
    expect(user[0]).toBeTruthy()
  });

  it("should login user", async () => {
    const userLogin = await testUserModel.loginUser(userId, "password");
    expect(userLogin?.first_name).toBeDefined()
  });

  it("should get all users", () => {
    const getAllUsers = testUserModel.getAllUsers();
    expect(getAllUsers).toBeDefined();
  });

  it("should get user by id", () => {
    const getUserById = testUserModel.getUserById("1");
    expect(getUserById).toBeDefined();
  });

  it("should update user data", () => {
    const updateUserData = testUserModel.updateUserData({
      id: 1,
      first_name: "John 000",
      last_name: "Doe 000",
      password: "password 000",
    });
    expect(updateUserData).toBeDefined();
  });

  it("should delete user", () => {
    const deleteUserById = testUserModel.deleteUserById("1");
    expect(deleteUserById).toBeDefined();
  });
});
