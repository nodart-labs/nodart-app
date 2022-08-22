import {Controller} from "nodart";

export class Sample2Controller extends Controller {

    init() {
        console.log('sample2 controller called')
    }

    delete(): any {
    }

    get(foo, id): any {

        /*
        * Response JSON:
        * this.send.data({foo, id})
        * */

        this.send.view('index', {
            title: 'Sample2',
            message: 'This arguments has been passed into controller action by parsing HTTP route',
            args: {foo, id}
        })
    }

    head(): any {
    }

    patch(): any {
    }

    post(): any {
    }

    put(): any {
    }
}
