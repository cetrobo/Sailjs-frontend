'use strict';

angular.module('crud')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/logout', {
        templateUrl: 'views/logout/logout.html',
        controller: 'LogoutCtrl'
        
      });
  });
