import {App} from 'nodart'
const config = require('./config')

new App({...config}).init().then(app => app.serve(3000))
