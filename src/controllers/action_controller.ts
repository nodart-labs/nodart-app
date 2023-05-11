import { Controller } from "nodart";

export class ActionController extends Controller {
  init() {
    console.log("Action controller called");
  }

  test() {
    return {test: "OK"}
  }

  get(): any {}

  head(): any {}

  patch(): any {}

  post(): any {}

  put(): any {}

  delete(): any {}
}
