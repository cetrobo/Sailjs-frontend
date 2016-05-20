'use strict';

angular.module('crud')
  .controller('SigninCtrl', function ($scope,$location,User,$http) {             


  	$scope.signin = function(){
      
      var data={ email:$scope.email,password:$scope.password};
      
       User.signin(data).success(function (data) {
          // save the user data in the service 
          User.setUser(data);
          var token=data.token;
          // TODO save the token whitin the User service instead of here
          localStorage.setItem('id_token', token);
          $location.path("/todo");
      }).error(function (data) {
          // TODO add alter here
          //console.log(data);
     });  
    }	

  });

