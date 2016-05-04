'use strict';

angular.module('crud', [
  'ngRoute',
  'angular-jwt',
  'ngSails'
  

])
  .config(function ($routeProvider, $locationProvider,$sailsProvider) {
    //console.log($locationProvider);
     $sailsProvider.url = 'https://sails-backoffice.herokuapp.com/';
     //console.log($sailsProvider.url);

    
     //console.log($sailsProvider);
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });
