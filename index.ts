import {App} from 'nodart'
const config = require('./config')
const routes = require('./config/routes')

new App({...config, routes}).init().then(app => app.serve(3000))
