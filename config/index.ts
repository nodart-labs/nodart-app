import {nodart} from "nodart";

const orm = require('./database')
const routes = require('./routes')

export = <nodart.app.AppConfigInterface>Object.freeze({
    rootDir: require('path').resolve(__dirname, '..'),
    /**
     * See session supporting docs: https://github.com/mozilla/node-client-sessions
     */
    session: {
        secret: 'MY_SUPER_STRONG_SECRET_KEY', // (!!!) CHANGE THIS OPTION IN PRODUCTION (should be a large unguessable string)
        duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
        activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
    },
    /**
     * See ORM supporting docs: https://knexjs.org/guide/
     */
    orm,
    routes,
    exception: {
        /*
        * Uncomment this line and set another path to your exception.html or leave it as is.
        * This option provides template for view data from Exception.
        * */
        // template: 'exception' // or (response: nodart.http.HttpResponseDataInterface) => stringPathToTemplate
    }
})
