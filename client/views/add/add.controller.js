'use strict';

angular.module('crud')
  .controller('AddCtrl', function ($scope,Todolist,Todo) {



  $scope.add=function(){


   var data=$scope.data={

      id:$scope.id,
      titre:$scope.titre,
      message:$scope.message,
      completed:$scope.completed

    }

     var todo=Todo.addTodo(data);


      todo.success(function(data){

               var token=data.token;
               console.log(token);
               localStorage.setItem('id_token', token);


      }).error(function (data) {
        
          //console.log(status); 
          
          console.log(data);
       
      });

   };

  });
