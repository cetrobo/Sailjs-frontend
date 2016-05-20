'use strict';

angular.module('crud')
  .controller('SignupCtrl', function ($scope,User,jwtHelper,$rootScope,$location) {
  	//console.log(User);
     	
  	 $scope.signup = function () {
           var data={email:$scope.email,password:$scope.password,confirmPassword:$scope.confirmPassword}; 

           var user = User.signup(data)

           user.success(function (data) {
                var token=data.token;
                localStorage.setItem('id_token', token);//sauvegarder token sur localstorage
                $location.path("/signin");
           })
           user.error(function (data) {
               
           });  
         };
});	

