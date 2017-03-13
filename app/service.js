(function () {
  'use strict';

  angular.module('reviews').factory('dataService', ['Guid', 'localStorageService', function(Guid, localStorageService) {
    return {
      get: localStorageService.get,
      save: function(r) {
        var review = { id: Guid.newGuid(), detail: { date:  Date.now(), text: r } };
        localStorageService.save(review);
      }
    };
  }]);
})(); // We're not concatenating all of our source files into a single file
