#!/usr/bin/env node

/***************************************************************************************

 Base CLI class: CommandLine

 cmd.command -> {
   command: string, -> first argument in command line string.
   action: string,  -> second argument in command line string (OPTIONAL).
   options: object -> Object containing command options with values (default TRUE if value is None).
 }
 cmd.system -> {
   commands() -> List of system commands.
   run(commandName: string) -> Run system command.
 }

 ---

 The CLI only recognizes ES modules, therefore you must build up and transform all the files to ES modules.
 In this situation, the system method "buildApp" is useful.

 example of call: cmd.system.buildApp(app)

 (Try using "node —loader ts-node/esm cmd..." or something else to specify the interpreter.
 This scenario wasn't put into practice and tested.)

 this method executes synchronously and sets the "rootDir" configuration option as the path to the project's build folder.

 *************************************************************************************/

const { App } = require("nodart");

const app = new App({
  rootDir: require("node:path").resolve(__dirname, "../src"),

  // REPLACE THIS SAMPLE WITH YOUR OWN DATABASE CONFIGURATION OPTIONS
  orm: {
    client: "better-sqlite3",
    connection: {
      filename: require("node:path").resolve(
        __dirname,
        "../src/database/sample.sqlite",
      ),
    },
    useNullAsDefault: true,
  },
});

const cmd = app.get("cmd").call();

cmd.run();
