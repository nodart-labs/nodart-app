import {Controller} from "nodart";

export class SampleController extends Controller {

    init() {
        console.log('sample controller called')

        this.session.set('test', 'this is a SESSION set usage example.')

        console.log(this.session.get.test)
    }

    delete(): any {
    }

    get(): any {
        this.send.view('index', {
            title: 'Sample',
            message: `This template has been parsed by template engine. See Docs: 
            <a href="https://mozilla.github.io/nunjucks/api.html" target="_blank">https://mozilla.github.io/nunjucks/api.html</a>`
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
