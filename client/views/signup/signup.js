'use strict';

angular.module('crud')
  .config(function ($stateProvider) {
    $stateProvider
      .state("signup", {
      	url:"/signup",
        templateUrl: "views/signup/signup.html",
        controller: "SignupCtrl"
      });
  });
