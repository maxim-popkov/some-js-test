/*
* View for display Main Info
* View controll class page__main and listen events from profileListView
*
*/
define([
    'jquery',
    'backbone',
    'hbs!../../templates/profileMainView'
], function ($, Backbone, ProfileMainHbs) {
    "use strict";
    var ProfileMainView = Backbone.View.extend({

        el: $('.page__main'),

        profileMainHbs: ProfileMainHbs,

        changeProfile: function (inProfile) {
            this.profile = inProfile;
            this.render();
        },

        render: function () {
            var context = {
                profile: this.profile.toJSON()
            };
            var renderedMainHbs = this.profileMainHbs(context);
            this.$el.html(renderedMainHbs);
        }
    });
    return ProfileMainView;
});
