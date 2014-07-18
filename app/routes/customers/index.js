export default Ember.Route.extend({
  model: function() {
    //return this.store.find('customer');
    return new Ember.RSVP.Promise(function(resolve) {
      setTimeout(function() {
        var result = [
          Ember.Object.create({
            name: 'Juanito 2',
            category: 'whatever',
            whoah: "superb"
          })
        ];

        resolve(result);
      }, 1000);
    });
  }
});
