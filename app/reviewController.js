angular.module('reviews')
.controller('ReviewController',['$scope', function($scope){
    $scope.reviews = [];
    $scope.add = function(r){
      $scope.reviews.unshift(r);
    }
}])
