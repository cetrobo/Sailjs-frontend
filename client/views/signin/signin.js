'use strict';

angular.module('crud')
  .config(function ($stateProvider) {
    $stateProvider
      .state('signin', {
      	url:'/signin',
        templateUrl: 'views/signin/signin.html',
        controller: 'SigninCtrl'
        
        
      });
  });
