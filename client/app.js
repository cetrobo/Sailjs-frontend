'use strict';

angular.module('crud', [
  'ngRoute'

])
  .config(function ($routeProvider, $locationProvider) {
    //console.log($locationProvider);


    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });
