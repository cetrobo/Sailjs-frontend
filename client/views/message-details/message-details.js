'use strict';

angular.module('crud')
  .config(function ($stateProvider) {
    $stateProvider
      .state("todoDetails", {
      	url:"/details/:id",
        templateUrl: "views/message-details/message-details.html",
        controller: "MessageDetailsCtrl",
        private: true,
        resolve:{
        todo :function(Todo,$stateParams){
          	return Todo.getTodoid($stateParams.id).then(function(response){
          	return response.data;
          });
         }
        }
      });
  });
