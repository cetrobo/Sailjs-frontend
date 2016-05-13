'use strict';

angular.module('crud')
  .service('Todo', function ($http,$sails,$q) {

  		return{

  			 addTodo : function(todo){

  				return $http.post('https://sails-backoffice.herokuapp.com/api/todo',todo);

  			},

         removeTodo:function(id){
            //console.log("todo"+id);
            return $http.delete("https://sails-backoffice.herokuapp.com/api/todo/" + id);
        },

        updateTodo:function(id,todo){
              //console.log("todo"+id);
            return $http.put("https://sails-backoffice.herokuapp.com/api/todo/" + id,todo);
        },

  		 allTodo: function(){

          return $http.get('https://sails-backoffice.herokuapp.com/api/todo');

        },

        getTodoid :function(id){

          return $http.get("https://sails-backoffice.herokuapp.com/api/todo/"+id);
        },



  		}

  });
