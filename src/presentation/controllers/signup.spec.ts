import { SignUpController } from "./signup";

describe("SignupController", () => {
  test("Should return 400 if no name is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: "any_email@mail.com",
        password: "strongPassword",
        passWordConfirmation: "strongPassword",
      },
    };

    const httpResult = sut.handle(httpRequest);
    expect(httpResult.statusCode).toBe(400);
    expect(httpResult.body).toEqual(new Error("Missing param: name"));
  });
});
