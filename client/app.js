'use strict';

angular.module('crud', [
  'ngRoute',
  'angular-jwt',
  'ngSails',
  'ngMessages',
  'ngResource'
  

])
  .config(function ($httpProvider,$routeProvider, $locationProvider,$sailsProvider,jwtInterceptorProvider) {
    
     $sailsProvider.url = 'https://sails-backoffice.herokuapp.com';

    jwtInterceptorProvider.tokenGetter = function() {
      //La fonction sera appelle quand il aura un appel http
      var idToken = localStorage.getItem('id_token');
      //console.log(idToken);
        return idToken;

  };

  $httpProvider.interceptors.push('jwtInterceptor');

      //console.log($httpProvider);
      //var token = User.signup(data);
  
       //console.log(jwtInterceptorProvider);
      //var token=localStorage.getItem('id_token');

      $routeProvider
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);  

/*
1. $locationChangeStart
3. $locationChangeSuccess
2. $routeChangeStart
4. $routeChangeSuccess */

  }).run(function ($rootScope, $location,$log,User) {

     $rootScope.$on("$locationChangeStart", function (event,next, current,jwtHelper) {
          
          
          if(!User.isLoggedIn()){
              
             console.log("not connect");


          }else{


             console.log("connect");
          }

    });

});
