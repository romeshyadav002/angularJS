// app.js
var app = angular.module('myApp', ['reviewApp']);

app.controller('TodoController', ['$scope',function($scope) {
  $scope.tasks = []; // list of tasks

  $scope.addTask = function() {
    if ($scope.newTask) {
      $scope.tasks.push($scope.newTask);
      $scope.newTask = '';
    }
  };

  $scope.deleteTask = function(index) {
    $scope.tasks.splice(index, 1); // remove 1 item at position 'index'
  };

  $scope.isSpy = true;
  $scope.fullName = "romeo yadav";
  $scope.codename = "James bond";
  $scope.getFirstName = function () {
    return $scope.fullName;
  }

  $scope.employees =[
    {
      fname:'Chandler',
      lname:'Bing',
      salary: 50000
    },
    {
      fname:'Ross',
      lname:'Geller',
      salary: 40000
    },
    {
      fname:'Joey',
      lname:'Tribbiani',
      salary: 30000
    }
  ]

  $scope.count =0;
  $scope.show = true;
  $scope.toggleShow =function () {
    $scope.show = !$scope.show;
  }

}]);


