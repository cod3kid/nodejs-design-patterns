import * as loggerModule from "./logger.js";
import { log, Logger as CustomLogger } from "./logger.js";
console.log(loggerModule);

log("Hello");

const Logger = () => {};

// Logger as CustomLogger is used to avoid name clashes
