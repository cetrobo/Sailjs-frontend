'use strict';

angular.module('crud')
  .config(function ($stateProvider) {
    $stateProvider
      .state("todo", {
      	url:"/",
        templateUrl: "views/todo/todo.html",
        controller: "TodoCtrl",
        private: true,
        resolve: {
        	listetodo :function(Todo){
        	 return Todo.allTodo().then(function(response){

        	 return response.data;
        	});
        	}
        }
      });
  });
