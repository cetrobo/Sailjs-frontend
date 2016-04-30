'use strict';

angular.module('crud')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/update/:id', {
        templateUrl: 'views/update/update.html',
        controller: 'UpdateCtrl'
      });
  });
