'use strict';

angular.module('crud')
  .config(function ($stateProvider) {
    $stateProvider
      .state("todoAdd", {
      	url:"/new/todo",
        templateUrl: "views/add/add.html",
        controller: "AddCtrl",
        private: true
      });
  });
