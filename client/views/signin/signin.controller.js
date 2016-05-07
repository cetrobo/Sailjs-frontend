'use strict';

angular.module('crud')
  .controller('SigninCtrl', function ($scope,$rootScope,$location) {


  	$scope.login = function(){

  		

  		 $rootScope.email = $scope.email;
  		 $rootScope.password = $scope.password;

  		
  	 
  	}	

  });

