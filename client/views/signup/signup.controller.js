'use strict';

angular.module('crud')
  .controller('SignupCtrl', function ($window,$scope,User,jwtHelper,$rootScope) {
  	//console.log(User);
     	
  	 $scope.signup = function () {
           var data={email:$scope.email,password:$scope.password,confirmPassword:$scope.confirmPassword}; 

          
           var user = User.signup(data)

           user.success(function (data,jwtInterceptorProvider,$httpProvider) {
                //Do whatever is needed
                $httpProvider.interceptors = [];
                var token=data.token;
                localStorage.setItem('id_token', token);
                $httpProvider.interceptors.push('jwtInterceptor');
                  //console.log(jwtInterceptor);
                //$window.location.href = '/signin';
           })

           user.error(function (data) {
                //Do whatever is needed
               //console.log(data);
           });  
        };
 
 

});	

