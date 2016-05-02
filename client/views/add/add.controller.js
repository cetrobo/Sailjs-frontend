'use strict';

angular.module('crud')
  .controller('AddCtrl', function ($scope,Todolist) {

 $scope.listTodo=Todolist.all();

  $scope.add=function(){


   $scope.listTodo.push({
   		id:$scope.id,
      titre:$scope.message,
   		message:$scope.titre,
   		completed:$scope.completed
   });


   };

  });
