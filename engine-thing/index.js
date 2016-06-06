/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'engine-thing',
  included: [],

  isDevelopingAddon: function() {
    return true;
  }
});
