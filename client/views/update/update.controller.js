'use strict';

angular.module('crud')
  .controller('UpdateCtrl', function ($scope,$routeParams) {


$scope.id=$routeParams.id;

console.log($scope.id);


  //$scope.todo=Todolist.all();


  });
