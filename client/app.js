'use strict';

angular.module('crud', [
  'ngRoute'

])
  .config(function ($routeProvider, $locationProvider) {
    //console.log($locationProvider);
    $routeProvider
    .when('/todo',{
      templateUrl:'todo/todo.html',
      controller:'TodoCtrl'

    });
    $routeProvider
    .when('/update/:id',{
      templateUrl:'update/update.html',
      controller:'UpdateCtrl'

    });

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });
