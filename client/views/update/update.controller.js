'use strict';

angular.module('crud')
  .controller('UpdateCtrl', function ($scope,$routeParams,Todo,$location) {

    var currentId=$routeParams.id;
		Todo.getTodoid(currentId)
    .success(function (data, status, headers, jwr) {
        $scope.todo=data;
       // données récupérées avec succès
    })
    .error(function (data, status, headers, jwr) {
          //console.log(status); 
          console.log(data);
    });
		

    $scope.update=function(){

          $scope.disabled= false;
      Todo.updateTodo($routeParams.id,$scope.todo).success(function(data){

            $scope.disabled = true;
           


      }).error(function(data){

            console.log(data);
      });

    }

});
