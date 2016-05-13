'use strict';

angular.module('crud')
  .controller('MessageDetailsCtrl', function ($scope,$routeParams,Todo) {

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
		

     $scope.edite=function(){

          $scope.disabled= false;
      console.log($scope.todo);

    }

  });
