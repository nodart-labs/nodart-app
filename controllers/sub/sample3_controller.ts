import {Controller} from 'nodart'

export class Sample3Controller extends Controller {

    init() {
        console.log('sample3 controller called')
    }

    hello() {
        console.log('hello action called')
        console.log('current route data:', this.route.data)
        console.log('current request headers:', this.http.request.headers)
    }

    delete(): any {
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
}
