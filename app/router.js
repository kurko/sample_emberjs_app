var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('customers', { path: '/customers' }, function() {
    this.route('index');
  });
});

export default Router;
