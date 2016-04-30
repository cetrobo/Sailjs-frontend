'use strict';

angular.module('crud')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/add', {
        templateUrl: 'views/add/add.html',
        controller: 'AddCtrl',
        controllerAs: 'vm'
      });
  });
