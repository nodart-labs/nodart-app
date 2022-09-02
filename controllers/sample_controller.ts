import {Controller} from "nodart";
import {SampleModel} from "../models/sub/sample";
import {SampleService} from "../services/sample";

export class SampleController extends Controller {

    model = {
        sub: {
            sample: {} as SampleModel
        }
    }

    service = {
        sample: {} as SampleService
    }

    async init() {

        console.log('Sample controller called')

        console.log('-----------')

        console.log('Testing session:')

        this.session.set({test: 'OK'})

        console.log('Session test status:', this.session.get.test)

        console.log('-----------')

        console.log('Testing Service:')

        const service = this.service.sample

        console.log('Service test status:', service.test())

        console.log('-----------')

        console.log('Testing Migrations:')

        console.log('Migrations test status:', await service.testMigration())

        console.log('-----------')

        console.log('Testing Model:')

        console.log('Model test status:', await service.testModel())

        console.log('-----------')
    }

    get(): any {
        this.send.view('index', {
            title: 'Sample',
            message: `This page has been parsed by template engine. See Docs: 
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

    delete(): any {
    }
}
