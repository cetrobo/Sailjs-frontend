'use strict';

angular.module('crud', [
  'ngRoute',
  'angular-jwt',
  'ngSails'

])
  .config(function ($routeProvider, $locationProvider,$sailsProvider) {
    //console.log($locationProvider);
     //$sailsProvider.url = 'http://foo.bar';
     //console.log($sailsProvider.url);
     console.log($sailsProvider);
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });
