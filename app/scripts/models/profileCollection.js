define([
    'backbone',
    './profile'
], function (Backbone, Profile) {
    'use strict';
    var ProfileCollection = Backbone.Collection.extend({

        model: Profile,

        selected: 2,

        url: './profiles.json',

        setCurrentId: function (profileId) {
            this.selected = profileId;
        },

        getCurrentId: function () {
            return this.selected;
        },

        getNextId: function () {
            return this.selected + 1;
        },

        getPrevId: function () {
            return this.selected - 1;
        },

        parse: function (response) {
            var index = 0;
            var results = [];
            var profile = null;
            var item = null;
            for (index = 0; index < response.length; index += 1) {
                item = response[index];
                profile = new Profile({
                    firstName: item.first_name,
                    lastName: item.last_name,
                    age: item.age,
                    location: item.location,
                    id: item.id
                });
                results.push(profile);
            }
            return results;
        }
    });
    return ProfileCollection;
});
