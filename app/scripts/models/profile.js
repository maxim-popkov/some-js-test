define([
    'backbone'
], function (Backbone) {
    'use strict';
    var ProfileModel = Backbone.Model.extend({
        defaults: {
            firstName: "First name",
            lastName: "Last name",
            age: 18,
            location: 'Seatle',
            id: -1
        }
    });
    return ProfileModel;
});
