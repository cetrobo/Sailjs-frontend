'use strict';

angular.module('crud')
  .controller('TodoCtrl', function ($scope,$routeParams,Todo,Todolist,$http) {
   
  $scope.selectedTodo=null;
    var getTodo=Todo.allTodo();
    getTodo.success(function (data, status, headers, jwr) {
              console.log(data);
              $scope.listTodo=data;
       // données récupérées avec succès
      })
      .error(function (data, status, headers, jwr) {
          //console.log(status); 
          console.log(data);
       
      });

   

      $scope.delete=function(id){
         var removed=Todo.removeTodo(id);
         var confirmation=confirm("vous voulez vraiment supprimez todo ?");
           if(confirmation == true){
              removed.success(function (data) {
                console.log(data);
                alltodo();
            })
          .error(function (data) {
            console.log(data);
          });
        }
       };


        function alltodo(){

             var getTodo=Todo.allTodo();
    getTodo.success(function (data, status, headers, jwr) {
              console.log(data);
              $scope.listTodo=data;
       // données récupérées avec succès
      })
      .error(function (data, status, headers, jwr) {
          //console.log(status); 
          console.log(data);
       
      });
        }

  });
