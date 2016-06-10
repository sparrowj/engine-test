import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('openChildren', [{name: 'John'}, {name: 'Paul'}, {name: 'George'}]);
  },

  willUpdate() {
    // i'm never called
    console.log('updating...');
  },

  willDestroyElement() {
    // i'm never called
    console.log('destroying...');
  },

  actions: {
    openChild(child = {name: "Ringo"}) {
      let openChildren = this.get('openChildren');
      openChildren.addObject(child);
    },

    closeChild(child) {
      let openChildren = this.get('openChildren');
      openChildren.removeObject(child);
    }
  }

});
