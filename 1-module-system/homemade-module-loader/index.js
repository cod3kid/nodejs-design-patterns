function loadModule(filename, module, require) {
  const wrappedSrc = `(function (module, exports, require) {
        ${fs.readFileSync(filename, "utf8")}
        })(module, module.exports, require)`;
  eval(wrappedSrc);
}

function require(moduleName) {
  console.log(`Require invoked for module: ${moduleName}`);
  const id = require.resolve(moduleName);
  if (require.cache[id]) {
    return require.cache[id].exports;
  }
  // module metadata
  const module = {
    exports: {},
    id,
  };

  require.cache[id] = module;

  loadModule(id, module, require);

  return module.exports;
}
require.cache = {};
require.resolve = (moduleName) => {
  /* resolve a full module id from moduleName */
};

// In the main file

const dependency = require("./anotherModule");

function log() {
  console.log(`Well done ${dependency.username}`);
}
// Exported API for public use
module.exports.run = () => {
  log();
};
