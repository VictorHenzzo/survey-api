import BadRequest from "../errors/http_error";
import { MissingParamError } from "../errors/missing_param_error";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { Controller } from "../protocols/controller";

export class SignUpController implements Controller {
  constructor() {}

  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      "name",
      "email",
      "password",
      "passWordConfirmation",
    ];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return new BadRequest(new MissingParamError(field));
      }
    }
  }
}
