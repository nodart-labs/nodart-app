import { Controller } from "nodart";

export class Sample3Controller extends Controller {
  init() {
    console.log("sample3 controller called");
  }

  get(id: number, id2: number): any {
    console.log("request param id:", id);
    console.log("request param id2:", id2);

    return {id, id2}
  }

  head(): any {}

  patch(): any {}

  post(): any {}

  put(): any {}

  delete(): any {}
}
