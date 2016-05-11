'use strict';

angular.module('crud')
  .controller('TodoCtrl', function ($scope,$routeParams,Todolist,$http,Todo) {
   
  $scope.selectedTodo=null;

  

       var getTodo=Todo.alltodo();
       
    getTodo.success(function (data, status, headers, jwr) {
              $scope.listTodo=data;
              var token=data.token;
               //console.log(JSON.stringify(data, null, 4))
                localStorage.getItem('id_token', token);
               //console.log(JSON.stringify(data,null,4));
               
       // données récupérées avec succès
      })
      .error(function (data, status, headers, jwr) {
        
          //console.log(status); 
          
          console.log(data);
       
      });
  
      $scope.delete=function(index){

            var removed=Todo.removeTodo(index);

        removed.success(function (data, status, headers, jwr) {
              $scope.listTodo=data;
               
       // données récupérées avec succès
      })
      .error(function (data, status, headers, jwr) {
        
          //console.log(status); 
          
          console.log(data);
       
      });            
      };
    

  });
