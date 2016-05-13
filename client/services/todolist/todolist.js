'use strict';

angular.module('crud')
.factory('_', function() {
		return window._;
	})
  .factory('Todolist', function (Todo) {

      

    var todo=[{
      id:'a01',
			titre:'Citation',
      message:'Vous êtes de ceux-là ? Ca tombe bien, je lai été moi aussi !',
      completed:false
    },
    {

      id:'a02',
			titre:'Citation 2',
      message:'Le mieux pour se faire une idée est de le tester',
      completed:false
    },
    {

      id:'a03',
			titre:'Citation 3',
      message:' Node.js  pour les débutants',
      completed:false
    }

  ];

    return {



        all: function(){

          return todo;
   

        },

        getById: function(todoId){

					for(var i=0;i<todo.length;i++){


						if(todo[i].id == todoId){
							return todo[i];

						}
					}



        },


    };

      });
