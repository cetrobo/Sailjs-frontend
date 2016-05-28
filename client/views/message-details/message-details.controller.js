'use strict';

angular.module('crud')
  .controller('MessageDetailsCtrl', function ($scope,$stateParams,Todo,todo,$location) {

	$scope.todo=todo;
      
     $scope.edit=function(){
      $scope.disabled= false;
        Todo.updateTodo($stateParams.id,$scope.todo).success(function(data){
              	$location.path("/");
        }).error(function(data){
              console.log(data);
        });
    }

  });
