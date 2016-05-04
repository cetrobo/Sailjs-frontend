'use strict';

angular.module('crud')
  .controller('SignupCtrl', function ($scope,$sails) {

  
  			//console.log()
  		$scope.user = [];


    // Using .success() and .error()
   $scope.create=function(){


    $sails.post("/api/user")
      .success(function (data, status, headers, jwr) {
        console.log(data);
        //$scope.user=data;
      })
      .error(function (data, status, headers, jwr) {
        
       //console.log(status);
        alert('Houston, we got a problem!');
      });		

};

});	

