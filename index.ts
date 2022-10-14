import {App} from 'nodart'
import {SampleService} from "./services/sample"
import {SampleController} from "./controllers/sample_controller";

const config = require('./config')

new App({...config}).init().then(app => {

    app.serve(3000, 'http', '127.0.0.1')

    /*******************************************************************************************
     HTTP SERVICE (since version: 3.2.0):

     When handling a http request, the http service offers the possibility
     to develop straightforward callback functions that exclude the usual controller method call.

     EXAMPLE:
     ********************************************************************************************/

    const http = app.service.http()

    /**
     * @param route: string | nodart.router.RouteDescriptor -> {
     *     path: string,
     *     name?: string,
     *     action?: string,
     *     controller?: (route: nodart.router.RouteData) => typeof Controller,
     *     types?: {
     *         [paramName: string]: typeof Number | RegExp | ((value: any) => any)
     *     },
     *     [addon: string]: any
     * }
     *
     * @param callback: nodart.service.HttpServiceRouteCallback -> (scope: nodart.service.HttpServiceScope) => Promise<any> | any
     */

    http.get({path: '/sample-http-service/:+id?', controller: () => SampleController}, ({
        app,
        http,
        session,
        route,
        model,
        service,
        respond,
        controller
    }) => {

        const sampleController = controller as SampleController

        const sampleService = service.sample as SampleService

        console.log('----------------------------')

        console.log('SampleController:', sampleController.constructor)

        console.log('----------------------------')

        const scope = {}

        Object.entries(sampleService.scope).forEach(([entry, data]) => scope[entry] = data?.constructor ?? data)

        console.log('SampleService scope:', scope)

        console.log('----------------------------')

        console.log('current request headers:', http.request.headers)

        console.log('----------------------------')

        console.log('current route data:', route)

        console.log('----------------------------')

        console.log('current URL data:', http.parseURL)

        respond.send.view('index', {
            title: 'Sample Http Service',
            code:
                '\r\n'
                + 'http.get("/sample-http-service/:+id?", (scope) => {'
                + '\r\n'
                + '...'
                + '\r\n'
                + '})'
        })

        // or
        // return {SOME_JSON: 'VALUE'}

        // or
        // return 'SOME_STRING'

    })

    http.get('/form-data', ({respond}) => {

        respond.send.view('form')

    })

    // processing request json and multipart/form-data

    http.post('/form-data', async ({http}) => {

        const data = http.isFormData
            ? await http.form.fetchFormData().then(form => {
                const {fields, files} = form
                return {fields, files}
            })
            : http.data

        console.log(data)

        if (http.isFormData) return {fields: data.fields, files: data.files}

        return data

    })

})
