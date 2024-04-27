import BadRequest from "../errors/http_error";
import { MissingParamError } from "../errors/missing_param_error";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController {
  constructor() {}

  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return new BadRequest(new MissingParamError("name"));
    }

    if (!httpRequest.body.email) {
      return new BadRequest(new MissingParamError("email"));
    }
  }
}
