(function () {
  'use strict';
  angular.module('reviews')
  .controller('ReviewController',['$scope', 'ReviewService', function($scope, ReviewService) {
      $scope.reviews = ReviewService.get();
      $scope.add = function(r) {
        ReviewService.save(r);
      }
    }]);
  })(); // We're not concatenating all of our source files into a single file
