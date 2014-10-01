/* global -Promise */
var fs = require('fs');
var path = require('path');
var Promise = require('bluebird');
var loadPlugin = require('./load_plugin');

var materialistic = module.exports = function(url) {
  /**
  * Given the url, attempt to call appropriate plugin.
  */
  var plugin;
  var host = require('url').parse(url).host;

  try {
    plugin = loadPlugin('materialistic-' + host);
  } catch (err) {
    plugin = loadPlugin('materialistic-default');
  }
  
  return plugin.fetch(url);
};
