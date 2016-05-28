'use strict';

angular.module('crud')
  .config(function ($stateProvider) {
    $stateProvider
      .state("profile",{
      	url:"/profile",
        templateUrl: "views/profile/profile.html",
        controller: "ProfileCtrl",
        private: true,
        resolve:{
          listeUser: function(User){
            return User.getListeUser().then(function(response){
            		return response.data;
            });
        }
        }
      });
  });
