define([
  'underscore',
  'backbone'
], profileModel);

function profileModel(_, Backbone){
  var ProfileModel = Backbone.Model.extend({
    defaults: {
      firstName: "First name",
      lastName: "Last name",
      age: 18,
      location: 'Seatle',
      id: -1,
    }
  });
  return ProfileModel;
}