/*
 * Command executor.
 *
 * RUN "node cmd sample test-command --arg-test-2 YOUR_NAME" in command line to test command.
 * */
module.exports = ({ cmd }) => {
  console.log(cmd.command);

  return {
    testCommand(argTest1 = "Hello", argTest2 = "World!") {
      console.log("CLI testing arguments:", { argTest1, argTest2 });
      process.exit();
    },
  };
};
