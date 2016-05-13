'use strict';

angular.module('crud')
  .controller('AddCtrl', function ($scope,Todo) {



  $scope.add=function(){

   var dataTodo={

    
      titre:$scope.titre,
      message:$scope.message,
      completed:$scope.completed

    };
     //console.log(data);
      var todo=Todo.addTodo(dataTodo);
      $scope.disabled=false;
      todo.success(function(data, status, headers){
              $scope.disabled=true;
      }).error(function (data, status, headers) {
        
          console.log(data);
       
      });

   };

  

  });
