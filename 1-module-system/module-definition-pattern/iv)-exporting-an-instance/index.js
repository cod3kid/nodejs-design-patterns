// More like a singleton design pattern
const logger = require("./logger");
logger.log("This is an informational message");

// Note that this technique must be used with caution or avoided altogether.
const customLogger = new logger.constructor("Meow");
customLogger.log("This is an informational message");
