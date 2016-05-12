'use strict';

angular.module('crud')
  .service('Todo', function ($http) {

  		return{

  			addTodo : function(todo){

  				return $http.post('https://sails-backoffice.herokuapp.com/api/todo',todo);

  			},

     
  			alltodo: function(){

  				return $http.get('https://sails-backoffice.herokuapp.com/api/todo');

  			}

  		}

  });
