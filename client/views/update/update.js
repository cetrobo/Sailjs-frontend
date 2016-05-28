'use strict';

angular.module('crud')
  .config(function ($stateProvider) {
    $stateProvider
      .state("updateTodo", {
      	url:"/update/:id",
        templateUrl: "views/update/update.html",
        controller: "UpdateCtrl",
        private: true,
        resolve: {
        updateTodo: function(Todo, $stateParams){
				    return Todo.getTodoid($stateParams.id).then(function(response){

						return response.data;	
				});
        	}
      }
      });

   
  });
