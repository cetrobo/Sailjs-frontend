'use strict';

angular.module('crud', [
  'angular-jwt',
  'ngSails',
  'ngMessages',
  'ngResource',
  'ui.router',
  'angular-loading-bar'

])
  .config(function ($urlRouterProvider,$httpProvider, $locationProvider,$sailsProvider,jwtInterceptorProvider) {
    
     $sailsProvider.url = 'https://matodo-backend.herokuapp.com';
    jwtInterceptorProvider.tokenGetter = ['User',function(User) {
      //La fonction sera appelle quand il aura un appel http
      if(User.isLoggedIn()){
        var user=User.getUser();
        return user.token;
      }
       return null;
    }];

  $httpProvider.interceptors.push('jwtInterceptor');

      $urlRouterProvider.otherwise("/");
      $locationProvider.html5Mode(true);  


  }).run(function ($rootScope, $location,$log, $state,User) {

  $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
           //console.log(toState);           
           if(!User.isLoggedIn() && toState.private){
              event.preventDefault();
              $state.go("signin");
           }else if(User.isLoggedIn()){

                 $rootScope.isLogged=true;
           }
    });


  $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, error){
         

          console.log(error);        
           
    });
});
