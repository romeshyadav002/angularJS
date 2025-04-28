// app.js
var app = angular.module('myApp', []);

app.controller('TodoController', function($scope) {
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
});

