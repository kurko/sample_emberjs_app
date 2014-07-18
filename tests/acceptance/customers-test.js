import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;
module('Acceptance/Customer', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  },
});
test("Page contents", function() {
  visit('/customers/index').then(function() {
    equal(find('.customers').text().trim(), "Juanito 2", "Page contains a customer");
  });
});
