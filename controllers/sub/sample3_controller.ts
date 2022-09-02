import {Controller} from "nodart";

export class Sample3Controller extends Controller {

    init() {
        console.log('sample3 controller called')
    }

    hello() {
        console.log('hello action called')
        console.log('current route data:', this.route)
        console.log('current request headers:', this.http.request.headers)

        this.send.view('index', {
            title: 'Sample3',
            message: 'This controller action has been called manually from HTTP route'
        })
    }

    get(): any {
    }

    head(): any {
    }

    patch(): any {
    }

    post(): any {
    }

    put(): any {
    }

    delete(): any {
    }
}
