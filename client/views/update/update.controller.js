'use strict';

angular.module('crud')
  .controller('UpdateCtrl', function ($scope,$stateParams,updateTodo,Todo,$location,User) {

    var currentId=$stateParams.id;
		
    
    $scope.todo = updateTodo;

    $scope.update=function(){
      $scope.disabled= false;
        Todo.updateTodo($stateParams.id,$scope.todo).success(function(data){
             $scope.disabled= true;
             $location.path("/");
        }).error(function(data){
              console.log(data);
        });
    }

});
