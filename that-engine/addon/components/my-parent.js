import layout from 'that-engine/templates/components/my-parent';
import Ember from 'ember';

export default Ember.Component.extend({
  layout,

  init() {
    this._super(...arguments);
    this.openChildren = [{name: 'John'}, {name: 'Paul'}, {name: 'George'}];
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
