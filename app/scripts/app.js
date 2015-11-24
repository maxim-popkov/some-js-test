define([
  'backbone',
  'router',
  './models/profileCollection',
], function(Backbone, Router, ProfileCollection){
  var profiles = new ProfileCollection();

  /*fetch json data from server for app initialization*/
  var preLoad = function(){
    return new Promise(loadData);
  };

  var initialize = function(){
    Router.initialize(profiles);
  };

  function loadData(resolve, reject){
    profiles.fetch({
        'success': function (profiles){
            resolve(profiles);
        }
    });
  }

  return {
    initialize: initialize,
    preLoad: preLoad
  };
});