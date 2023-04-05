import { Controller, HttpException, RuntimeException } from "nodart";
import { SampleModel } from "../models/sub/sample";
import { SampleService } from "../services/sample";

export class SampleController extends Controller {
  model = {
    sub: {
      sample: {} as SampleModel,
    },
  };

  service = {
    sample: {} as SampleService,
  };

  async init() {
    console.log("Sample controller called");

    console.log("-----------");

    console.log("Testing session:");

    this.session.set({ test: "OK" });

    console.log("Session test status:", this.session.get.test);

    console.log("-----------");

    console.log("Testing Service:");

    const service = this.service.sample;

    /** ALTERNATE SERVICE CALL:

       this.app.get("service").call([
         {
            app: this.app,
            controller: () => this,
            http: this.http,
            route: this.route,
          },
       ]);

     */

    console.log("Service test status:", service.test());

    console.log("-----------");

    console.log("Testing Migrations:");

    console.log("Migrations test status:", await service.testMigration());

    console.log("-----------");

    console.log("Testing Model:");

    console.log("Model test status:", await service.testModel());

    console.log("-----------");

    // TESTING EXCEPTIONS:
    // throwing HTTP exception, message will be sent to user
    // throw new HttpException(this.http.getHttpResponse({status: 500, content: {html: 'SOME ERROR OCCURRED...'}}))
    // or
    // throw new HttpException('SOME ERROR OCCURRED...', {status: 500, contentType: 'text/html'})
    // or
    // throw new HttpException({myResponseJson: 'SOME ERROR OCCURRED'})

    // throwing regular exception, message will be not sent to user, but shown in server logs.
    // throw new RuntimeException('SOME ERROR OCCURRED...')

    // TESTING RESPONSE JSON:
    // this.send.data({someKey: someValue}) // Or you may pass string argument if prefer

    // TESTING FILE SEND:
    // this.http.sendFile('abs/path/to/file.ext')
  }

  get(): any {
    this.send.view("index", {
      title: "Sample",
      message: `This page has been parsed by template engine. See Docs: 
            <a href="https://mozilla.github.io/nunjucks/api.html" target="_blank">https://mozilla.github.io/nunjucks/api.html</a>`,
    });

    // or
    // return {SOME_JSON: VALUE}

    // or
    // return 'SOME_STRING'
  }

  patch(): any {}

  post(): any {}

  put(): any {}

  delete(): any {}
}
