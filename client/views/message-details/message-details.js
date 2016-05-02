'use strict';

angular.module('crud')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/message-details/:id', {
        templateUrl: 'views/message-details/message-details.html',
        controller: 'MessageDetailsCtrl'

      });
  });
