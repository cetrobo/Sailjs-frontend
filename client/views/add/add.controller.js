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
     

      todo.success(function(data, status, headers){
               console.log(data)
              

      }).error(function (data, status, headers) {
        
          //console.log(status); 
          
          //console.log(data);
       
      });

   };

  

  });
