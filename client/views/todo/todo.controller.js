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
  

    $scope.selectEdit=function(id){
            //console.log(id);
           
            console.log(id);
           
      };

      $scope.delete=function(id){
            
            var removed=Todo.removeTodo(id);

        removed.success(function (data, status, headers, jwr) {

              console.log(data);
               
      
      })
      .error(function (data, status, headers, jwr) {
        
        
          
          console.log(data);
       
      });
           
      };



    

  });
