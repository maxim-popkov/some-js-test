define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'hbs!../../templates/profileListView',
], profileListView);
/*
* View for Navigation in app
* View controll class page__footer and fire events if new element selected
*
*/
function profileListView($, _, Backbone, Handlebars, ProfileListHbs){
  var ProfileListView = Backbone.View.extend({
    
    el: $('.page__footer'),
    
    compiledTemplate: ProfileListHbs,
    
    initialize: function(profiles, listners){

      this.profiles = profiles;

      var index = null,
          listner = null;
      for(index in listners){
        listner = listners[index];
        this.addListner(listner);
      }
    },
    
    
    /*register listner for selectAnother event*/
    addListner: function(listner){
      if (!this.profiles){
        return;
      }
      listner.listenTo(this.profiles, 'selectAnother', listner.changeProfile);
    },

    selectProfile: function(profileId) {
      if (!this.profiles){
        return;
      }
      this.profiles.setCurrentId(profileId);
      var profile = this.profiles.get(profileId)
      if (profile){
        this.profiles.trigger('selectAnother', profile);
      }
      this.render();      
    },

    render: function(){
      var profileId = this.profiles.getCurrentId();
      var prevId = this.profiles.getPrevId();
      var nextId = this.profiles.getNextId();

      var context = { 
        'profiles': this.profiles.toJSON(),
        'selected': profileId,
        'prevId': prevId,
        'nextId': nextId
      };

      var renderedTemplate = this.compiledTemplate(context);
      this.$el.html( renderedTemplate );
      $('#profile-' + profileId).addClass('profiles-list__elem_selected');

      if (nextId > 6) {
        $('.paginator__right').css('visibility','hidden');
      }
      if (prevId < 1) {
        $('.paginator__left').css('visibility','hidden');
      }

    }

  });
  return ProfileListView;
}