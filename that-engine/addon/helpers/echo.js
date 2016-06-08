import Ember from 'ember';

export function echo(params/*, hash*/) {
  return params[0];
}

export default Ember.Helper.helper(echo);
