require.config({
  paths: {
  	jquery: '../bower_components/jquery/dist/jquery.min',
  	underscore: '../bower_components/underscore/underscore-min',
    backbone: '../bower_components/backbone/backbone-min',
    handlebars: '../bower_components/handlebars/handlebars.min',
    hbs: '../bower_components/require-handlebars-plugin/hbs'
  }
});

require([
  'app',
], function(App){
  App.preLoad().then(function(profiles){
  	App.initialize(profiles);
  });
});