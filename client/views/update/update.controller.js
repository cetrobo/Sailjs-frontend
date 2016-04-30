'use strict';

angular.module('crud')
  .controller('UpdateCtrl', function ($scope,$routeParams,Todolist) {

  $scope.todo=Todolist.getById($routeParams.id);
  $scope.selectedTodo=null;
//console.log($scope.id);


  //$scope.todo=Todolist.all();



   $scope.edit=function(todos){

     $scope.selectedTodo=todos;
     

  }

  });
