import { Controller } from "nodart";

export class Sample2Controller extends Controller {
  init() {
    console.log("sample2 controller called");
  }

  get(foo, id): any {
    this.send.view("index", {
      title: "Sample2",
      message:
        "This arguments has been passed into controller action by parsing HTTP route",
      args: { foo, id },
    });
  }

  patch(): any {}

  post(): any {}

  put(): any {}

  delete(): any {}
}
