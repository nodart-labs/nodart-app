import {Controller} from 'nodart'

export class SampleController extends Controller {

    init() {
        console.log('sample controller called')

        this.session.set('test', 'this is a SESSION set usage example.')

        console.log(this.session.get.test)
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
