import { MissingParamError } from "../errors/missing_param_error";
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
    expect(httpResult.body).toEqual(new MissingParamError("name"));
  });

  test("Should return 400 if no email is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        password: "strongPassword",
        passWordConfirmation: "strongPassword",
      },
    };

    const httpResult = sut.handle(httpRequest);
    expect(httpResult.statusCode).toBe(400);
    expect(httpResult.body).toEqual(new MissingParamError("email"));
  });

  test("Should return 400 if no password is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        email: "any_email",
        passWordConfirmation: "strongPassword",
      },
    };

    const httpResult = sut.handle(httpRequest);
    expect(httpResult.statusCode).toBe(400);
    expect(httpResult.body).toEqual(new MissingParamError("password"));
  });

  test("Should return 400 if no passWordConfirmation is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        email: "any_email",
        password: "strongPassword",
      },
    };

    const httpResult = sut.handle(httpRequest);
    expect(httpResult.statusCode).toBe(400);
    expect(httpResult.body).toEqual(
      new MissingParamError("passWordConfirmation")
    );
  });
});
