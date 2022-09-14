import {nodart} from "nodart";

const orm = require('./database')
const routes = require('./routes')

export = <nodart.app.AppConfigInterface>Object.freeze({
    rootDir: require('path').resolve(__dirname, '..'),
    /**
     * See session supporting docs: https://github.com/mozilla/node-client-sessions
     */
    session: {
        duration: 2 * 60 * 60 * 1000
    },
    /**
     * See ORM supporting docs: https://knexjs.org/guide/
     */
    orm,
    routes
})
