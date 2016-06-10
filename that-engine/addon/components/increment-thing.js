import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    this.set('counter', 1);
  },

  actions: {
    bump() {
      this.incrementProperty('counter', 1);
    }
  }
});
