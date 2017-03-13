(function () {
  'use strict';
  angular.module('reviews')
  .controller('ReviewController',['$scope', 'dataService', function($scope, dataService) {
      $scope.reviews = dataService.get();
      $scope.add = function(r) {
        dataService.save(r);
        $scope.newReview = '';
        $scope.reviews = dataService.get();
      }
    }]);
  })(); // We're not concatenating all of our source files into a single file
