define([
    'router',
    './models/profileCollection'
], function (Router, ProfileCollection) {
    "use strict";

    var profiles = new ProfileCollection();

    function loadData(resolve) {
        profiles.fetch({
            success: function (profiles) {
                resolve(profiles);
            }
        });
    }

    /*fetch json data from server for app initialization*/
    var preLoad = function () {
        return new Promise(loadData);
    };

    var initialize = function () {
        Router.initialize(profiles);
    };

    return {
        initialize: initialize,
        preLoad: preLoad
    };
});