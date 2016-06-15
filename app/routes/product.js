import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  dropdownOpen: false,
  actions:  {
    toggleDropdown() {
      this.toggleProperty('dropdownOpen');
    }
  }
});
