'use strict';

angular.module('crud')
  .controller('TodoCtrl', function ($scope,$routeParams,Todolist,$sails, $http,Todo) {
   
  $scope.selectedTodo=null;

  

    $http.get("https://sails-backoffice.herokuapp.com/api/todo")

    .success(function (data, status, headers, jwr) {
               //console.log(data);
               $scope.listTodo=data;
           
       // données récupérées avec succès
      })
      .error(function (data, status, headers, jwr) {
        
          //console.log(status); 
          
          console.log(data + status);
       
      });
  



    $scope.delete=function(index){
      
      var result=confirm("voulez vraiment supprimez cette element");

       if(result === true){

         $scope.listTodo.splice(index,1);

       }
      
    };




  });
