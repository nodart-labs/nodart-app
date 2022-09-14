#!/usr/bin/env node

const {App} = require('nodart')

const app = new App({

    // INSERT YOUR APPLICATION's CONFIGURATION IN HERE

    rootDir: process.cwd()
})

const cmd = app.get('cmd').call()

/*
* CommandLine - Base CLI class
*
* cmd.command: {
*   command: string, -> first argument in command line string.
*   action: string,  -> second argument in command line string (OPTIONAL).
*   options: { [key: string]: any } -> Object containing command options with values (default TRUE if value is None).
* }
* cmd.system -> {
*   commands() -> List of system commands.
*   run(commandName: string) -> Run system command.
* }
* */

cmd.run()
