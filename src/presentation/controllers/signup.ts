import BadRequest from "../errors/http_error";
import { MissingParamError } from "../errors/missing_param_error";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController {
  constructor() {}

  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ["name", "email", "password"];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return new BadRequest(new MissingParamError(field));
      }
    }
  }
}
