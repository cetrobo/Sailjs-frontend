'use strict';

angular.module('crud')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signin', {
        templateUrl: 'views/signin/signin.html',
        controller: 'SigninCtrl'
        
        
      });
  });
