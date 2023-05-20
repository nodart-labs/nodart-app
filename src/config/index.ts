import { nodart } from "nodart";

const orm = require("./database");
const routes = require("./routes");

export = <nodart.app.AppConfigInterface>Object.freeze({
  rootDir: require("path").resolve(__dirname, ".."),
  http: {
    useCors: false, // CORS Headers are disabled by default. Switch on this option if needed.
    session: {
      // See session supporting docs: https://github.com/mozilla/node-client-sessions
      config: {
        secret: "MY_SUPER_STRONG_SECRET_KEY", // (!!!) CHANGE THIS OPTION IN PRODUCTION ENVIRONMENT (should be a large unguessable string)
        duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
        activeDuration: 1000 * 60 * 5, // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
      },
    },
  },
  orm, // See ORM supporting docs: https://knexjs.org/guide/
  routes,
  exception: {
    // Uncomment this line and set another path to your exception.html or leave it as is.
    // This option provides template for view data from Exception. (under the "views" folder)
    // template: 'exception' // or (response: nodart.http.HttpResponseDataInterface) => 'string/path'
  },
  logger: {
    // Error Logging
    options: {
      error: {
        useLogging: false, // Disabled by default
        // filename: "", // errors logging filename: "error.log" by default
        // directory: "" // absolute path to logging directory: "{project_directory}/logs" by default
      },
      onHttp: {
        statuses: [500], // select under which http response code statuses the logging will be executed
        excludeStatuses: [], // select under which http response code statuses the logging will be skipped
      },
    },
  },
});
