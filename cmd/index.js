#!/usr/bin/env node

const {App} = require('nodart')

const app = new App({

    // INSERT YOUR APPLICATION's CONFIGURATION IN HERE

    rootDir: process.cwd()
})

const cmd = app.get('cmd').call()

/***************************************************************************************

 CommandLine - Base CLI class

 cmd.command -> {
   command: string, -> first argument in command line string.
   action: string,  -> second argument in command line string (OPTIONAL).
   options: { [key: string]: any } -> Object containing command options with values (default TRUE if value is None).
 }
 cmd.system -> {
   commands() -> List of system commands.
   run(commandName: string) -> Run system command.
 }

 ---

 The CLI only recognizes ES modules, therefore you must build up and transform all the files to ES modules.
 In this situation, the system method "buildApp" is useful.

 (Try using "node —loader ts-node/esm cmd..." or something else to specify the interpreter.
 This scenario wasn't put into practice and tested.)

 example of call: cmd.system.buildApp(app)

 this method executes synchronously and sets the "rootDir" configuration option as the path to the project's build folder.

 *************************************************************************************/

cmd.run()
