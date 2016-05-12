'use strict';

angular.module('crud')
  .service('Todo', function ($http,$sails) {

  		return{

  			addTodo : function(todo){

  				return $http.post('https://sails-backoffice.herokuapp.com/api/todo',todo);

  			},

        removeTodo:function(id){
            //console.log("todo"+id);
            return $http.delete("https://sails-backoffice.herokuapp.com/api/todo/" + id + "");
        },


  			alltodo: function(){

  				return $http.get('https://sails-backoffice.herokuapp.com/api/todo');

  			}

  		}

  });
