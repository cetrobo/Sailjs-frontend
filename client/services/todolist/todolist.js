'use strict';

angular.module('crud')
  .factory('Todolist', function () {

    var todo=[{
      id:'a01',
      message:'Vous êtes de ceux-là ? Ca tombe bien, je lai été moi aussi !',
      completed:true,
    },
    {

      id:'a02',
      message:'Le mieux pour se faire une idée est de le tester',
      completed:false
    },
    {

      id:'a03',
      message:' Node.js  pour les débutants',
      completed:false
    }

  ];

    return {

        all: function(){

          return todo;

        }


    };

      });
