'use strict';

angular.module('crud')
  .controller('AddCtrl', function ($scope,Todo,User,$location) {

 $scope.isLogged = User.isLoggedIn();

 $scope.add=function(){

   var dataTodo={
      titre:$scope.titre,
      message:$scope.message,
      completed:$scope.completed
    };
   var todo=Todo.addTodo(dataTodo);
      $scope.disabled=false;
      todo.success(function(data, status, headers){
              $location.path("/todo")
      }).error(function (data, status, headers) {
        
      });

   };

  });
