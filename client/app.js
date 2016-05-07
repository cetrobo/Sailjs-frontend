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
      //console.log($httpProvider);
       //var token = User.signup(data);
  
       //console.log(jwtInterceptorProvider);
      //var token=localStorage.getItem('id_token');

      $routeProvider
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);  


  }).run(function($rootScope,$location){

      $rootScope.$on("$routeChangeStart",function(event,next,current){

          if($rootScope.email == null && $rootScope.password == null){

                $location.path("/signin");
                //console.log(next.templateUrl);
          }else{


              $location.path("/todo");
          }

          //console.log($rootScope);

      });
  });   
