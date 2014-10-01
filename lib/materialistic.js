/* global -Promise */
var fs = require('fs');
var path = require('path');
var Promise = require('bluebird');
var loadPlugin = require('./load_plugin');

function parseHost(url) {
  var host = require('url').parse(url).host;

  return host.replace(/^www\./, '');
}

var materialistic = module.exports = function(url) {
  /**
  * Given the url, attempt to call appropriate plugin.
  */
  var plugin;

  try {
    plugin = loadPlugin('materialistic-' + parseHost(url));
  } catch (err) {
    plugin = loadPlugin('materialistic-default');
  }
  
  return plugin.fetch(url);
};
