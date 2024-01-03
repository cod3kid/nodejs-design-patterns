/*
It's also called as substack pattern

The primary advantage of this approach lies in its ability to reveal just one functionality,
offering a straightforward access point to the module. 
*/

module.exports = (message) => {
  console.log(`info: ${message}`);
};

// Below code is just an extension for this approach.

module.exports.verbose = (message) => {
  console.log(`verbose: ${message}`);
};
