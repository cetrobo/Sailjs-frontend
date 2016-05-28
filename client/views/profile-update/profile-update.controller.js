'use strict';

angular.module('crud')
  .controller('ProfileUpdateCtrl', function ($scope, getprofilid,$stateParams,User,$location) {

         $scope.logout = function(){
            User.logout();
            $location.path("/signin");
         }
        
        $scope.infoUser= getprofilid;

        $scope.update= function(){
            User.updateUser($stateParams.id,$scope.infoUser)
            .success(function(data){
                $location.path("/profile");
            }).error(function(data){
                console.log(data);
            });
        }

  });
