import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    close(child) {
      this.get('closeChild')(child);
    }
  }
});
