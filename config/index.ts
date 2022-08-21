export = {
    rootDir: __dirname + '/..',
    /*
    * See Session Support Docs: https://github.com/mozilla/node-client-sessions
    * */
    session: {
        secret: 'my strongly secret key',
        duration: 2 * 60 * 60 * 1000
    }
}
