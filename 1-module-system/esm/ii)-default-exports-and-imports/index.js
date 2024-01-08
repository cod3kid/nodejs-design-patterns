import MyLogger from "./logger.js";
const logger = new MyLogger("info");
logger.log("Hello World");

import * as loggerModule from "./logger.js";
const mello = new loggerModule.default("Info");
mello.log("Mello World");
