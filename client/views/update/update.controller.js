'use strict';

angular.module('crud')
  .controller('UpdateCtrl', function ($scope,$routeParams,Todolist) {

var todo=Todolist.getById($routeParams.id);

 console.log(todo);
//console.log($scope.id);


  //$scope.todo=Todolist.all();



 

  });
