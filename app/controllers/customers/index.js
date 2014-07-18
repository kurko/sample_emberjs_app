export default Ember.ArrayController.extend({
  itemController: 'customers/index-item',

  isEnough: function() {
    return this.get('content.length') > 5;
  }.property('content.length'),

  actions: {
    addCustomer: function() {
      var customer = this.store.createRecord('customer', {
        name: 'Luis',
        category: 'unknown'
      });

      customer.save();
    }
  }
});
