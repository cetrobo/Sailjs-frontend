'use strict';

angular.module('crud')
  .controller('SignupCtrl', function ($scope,User,jwtHelper,$rootScope,$location) {
      $scope.isLogged = User.isLoggedIn();
      $scope.signup = function () {
       var data={email:$scope.email,password:$scope.password,confirmPassword:$scope.confirmPassword}; 
          User.signup(data).success(function (data) {
                User.setUser(data);
                $location.path("/todo");
          }).error(function (data) {
               console.log(data);
          });  
       };
});