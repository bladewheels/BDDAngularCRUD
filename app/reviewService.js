(function () {
  'use strict';

  angular.module('reviews').factory('ReviewService', ReviewService);

  function ReviewService() {

    var storage = []; // TODO: Introduce local storage

    function get() {
      return storage;
    }
    function save(review) {
      storage.unshift(review);
    }

    var service = {
      get: get,
      save: save
    };

    return service;
  }
})(); // We're not concatenating all of our source files into a single file
