import layout from 'that-engine/templates/components/my-child';
import Ember from 'ember';


export default Ember.Component.extend({
  layout,

  actions: {
    close() {
      this.sendAction('closeSelectedChild', this.get('child'));
    }
  }
});
