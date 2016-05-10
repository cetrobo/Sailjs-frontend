'use strict';

angular.module('crud')
  .service('Todo', function ($http) {

  		return{

  			addTodo : function(data){

  				return $http.post('/api/todo');

  			},


  		}

  });
