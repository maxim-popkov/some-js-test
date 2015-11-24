define([
  'jquery',
  'underscore',
  'handlebars',
  'backbone',
  './views/profileListView',
  './views/profileSideView',
  './views/profileMainView'
], function($, _, Handlebars, Backbone, ProfileListView, ProfileSideView, ProfileMainView/*, ProjectListView, UserListView*/){
    var AppRouter = Backbone.Router.extend({

    //Views
    profileListView: null,
    profileSideView: null,
    profileMainView: null,

    routes: {
      'profile/:profileNumber': 'showProfile',
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(profiles){
    var app_router = new AppRouter();
    var self = this;

    if(!this.profileSideView){
      this.profileSideView = new ProfileSideView();
    }

    if(!this.profileMainView){
      this.profileMainView = new ProfileMainView();
    }
    
    if(!this.profileListView){
      listners = [this.profileSideView, this.profileMainView];
      this.profileListView = new ProfileListView(profiles, listners);
    }

    app_router.on('route:showProfile', function(rawProfileId){
      if (!isInt(rawProfileId)){
        return;
      }
      var profileId = parseInt(rawProfileId, 10);
      if (profileId < 1 || profileId > 6){
        return;
      }
      self.profileListView.selectProfile(profileId);
    });

    app_router.on('route:defaultAction', function(actions){
      app_router.navigate("profile/2", {trigger: true, replace: true});
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };

  function isInt(value) {
    return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
  }
});