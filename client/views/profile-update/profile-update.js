'use strict';

angular.module('crud')
  .config(function ($stateProvider) {
    $stateProvider
      .state("profileUpdate", {
      	url:'/profile/update/:id',
        templateUrl: 'views/profile-update/profile-update.html',
        controller: 'ProfileUpdateCtrl',
        controllerAs: 'vm',
        private: true,
        resolve:{
          
         getprofilid : function(User,$stateParams){

          return User.getUserId($stateParams.id).then(function(response){
                return response.data;
          });
         } 
        }
      });
  });
