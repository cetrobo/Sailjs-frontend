'use strict';

angular.module('crud', [
  'ngRoute'
  //'ngSails'
])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });
