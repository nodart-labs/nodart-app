import {Controller} from 'nodart'

export class Sample2Controller extends Controller {

    init() {
        console.log('sample2 controller called')
    }

    delete(): any {
    }

    get(foo, id): any {
        console.log('http route arguments: ', {foo, id})
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
