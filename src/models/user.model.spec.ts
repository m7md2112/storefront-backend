import { UserModel } from "./user.model";

const testUserModel = new UserModel();

describe("User Model", () => {
  it("should create a user", () => {
    const user = testUserModel.createUser({
      first_name: "John",
      last_name: "Doe",
      password: "password",
    });
    expect(user).toBeDefined();
  });

  it("should login user", () => {
    const userLogin = testUserModel.loginUser("1", "password" )
    expect(userLogin).toBeDefined();
  })

  it("should get all users", () => {
    const getAllUsers = testUserModel.getAllUsers();
    expect(getAllUsers).toBeDefined();
  })

  it("should delete user", () => {
    const deleteUserById = testUserModel.deleteUserById("1");
    expect(deleteUserById).toBeDefined();
  })

  it("should get user by id", () => {
    const getUserById = testUserModel.getUserById("1");
    expect(getUserById).toBeDefined();
  })

  it("should update user data", () => {
    const updateUserData = testUserModel.updateUserData({
      id: 1,
      first_name: "John 000",
      last_name: "Doe 000",
      password: "password 000"
    })
    expect(updateUserData).toBeDefined();
  })
});
