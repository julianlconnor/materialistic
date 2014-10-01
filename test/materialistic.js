/* global -Promise */
var Promise = require('bluebird');
var sinon = require('sinon');
var expect = require('expect.js');
var rewire = require('rewire');
var materialistic = rewire('../lib/materialistic');

var mockLoadPlugin = function(path) {
  return Promise.resolve();
};

describe('materialistic', function() {

  it('should require the plugin for a given host', function(done) {
    var revert = materialistic.__set__('fs', {
      exists: function() { return true; }
    });

    materialistic.__set__('loadPlugin', function(path) {
      expect(path).to.be('plugins/foo.bar');
      return { 
        fetch: function() {
          revert();
          done();
        }
      };
    });

    materialistic('http://foo.bar/baz/123');
  });

  it('should require the plugin for a given host', function(done) {
    materialistic.__set__('loadPlugin', function(path) {
      expect(path).to.be('plugins/default');
      return { 
        fetch: function() {
          done();
        }
      };
    });

    materialistic('http://nope-lol');
  });
  
  it('should require the plugin for a given host', function(done) {
    var spy = sinon.spy(function(url) {
      return Promise.resolve();
    });

    materialistic.__set__('loadPlugin', function(path) {
      return { 
        fetch: spy
      };
    });

    materialistic('http://nope-lol').then(function() {
      expect(spy.called).to.be(true);
      done();
    });
  });


});
