/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'that-engine',

  isDevelopingAddon: function() {
    return true;
  }
});
