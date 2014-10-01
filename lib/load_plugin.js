/**
* Strictly for testing.
*/
module.exports = function loadPlugin(path) {
  return require(require('path').join('../', path));
};
