'use strict';

angular.module('crud')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/todo', {
        templateUrl: 'views/todo/todo.html',
        controller: 'TodoCtrl'

      });
  });
