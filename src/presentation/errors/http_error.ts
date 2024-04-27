import { HttpResponse } from "../protocols/http";

export default class BadRequest implements HttpResponse {
  constructor(body: any) {
    this.body = body;
    this.statusCode = 400;
  }

  statusCode: number;
  body: any;
}
