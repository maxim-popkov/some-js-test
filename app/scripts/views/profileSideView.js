/*
* View for display Side Info
* View controll class page__side and listen events from profileListView
*
*/
define([
    'jquery',
    'backbone',
    'hbs!../../templates/profileSideView'
], function ($, Backbone, ProfileSideHbs) {
    "use strict";
    var ProfileSideView = Backbone.View.extend({

        el: $('.page__side'),

        profileSideHbs: ProfileSideHbs,

        changeProfile: function (inProfile) {
            this.profile = inProfile;
            this.render();
        },

        render: function () {
            var context = {
                profile: this.profile.toJSON()
            };
            var renderedSideHbs = this.profileSideHbs(context);
            this.$el.html(renderedSideHbs);
        }
    });
    return ProfileSideView;
});
