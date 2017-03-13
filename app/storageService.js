(function () {
  'use strict';

  angular.module('storageServices', []);
  angular.module('storageServices').factory('localStorageService',  function() {
    return {
      get: function() {
        var returnValue = [],
            storageItems = localStorage;
        for (var key in storageItems) {
          try {
            var details = JSON.parse(storageItems[key]);
            if (details.hasOwnProperty('date') && details.hasOwnProperty('text')) {
              returnValue.push(details);
            }
          } catch(e) {}
        }
        return returnValue;
      },
      save: function(review) { localStorage[review.id] = JSON.stringify(review.detail); }
    };
  });
})(); // We're not concatenating all of our source files into a single file
