/* global -Promise */
var fs = require('fs');
var path = require('path');
var Promise = require('bluebird');
var loadPlugin = require('./load_plugin');

var PLUGINS_PATH = './plugins';

var materialistic = module.exports = function(url) {
  /**
  * Given the url, attempt to call appropriate plugin.
  */
  var plugin;
  var host = require('url').parse(url).host;

  if ( fs.existsSync(path.join('./plugins', host + '.js')) ) {
    plugin = loadPlugin(path.join('./plugins', host));
  } else {
    plugin = loadPlugin(path.join('./plugins', 'default'));
  }
  
  return plugin.fetch(url);
};

