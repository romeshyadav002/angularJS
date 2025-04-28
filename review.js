// app.js
var app = angular.module('reviewApp', []);

app.controller('TodoController', ['$scope',function($scope) {


  $scope.form={};
  $scope.addReview =function(){
    $scope.reviews.push($scope.form);
    $scope.form ={}
  }
  $scope.reviews=[
    {
      comment:"this is awesome",
      by:"chanfler@gmail.com"
    }
  ]
}]);

// custom directive
app.directive('userinformation', function(){
  return {
    restrict :'E',
    templateUrl :'userInfo.html'
  }
})

