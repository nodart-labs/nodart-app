import { Controller } from "nodart";

export class Sample4Controller extends Controller {
  init() {
    console.log("sample4 controller called");
  }

  hello() {
    console.log("hello action called");
    console.log("current route data:", this.route);
    console.log("current request headers:", this.http.request.headers);

    this.send.view("index", {
      title: "Sample4",
      message:
        "This controller action has been called directly from HTTP route",
    });
  }

  get(): any {}

  head(): any {}

  patch(): any {}

  post(): any {}

  put(): any {}

  delete(): any {}
}
