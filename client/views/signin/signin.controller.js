'use strict';

angular.module('crud')
  .controller('SigninCtrl', function ($scope,$location,User,$http) {             


  	$scope.signin = function(){

    var data={ email:$scope.email,password:$scope.password}

  		 
        //console.log(typeof user);
      
       var user=User.signin(data);
        //console.log(typeof user);
     user.success(function (data) {
                    console.log("token signin",data);
                    var token=data.token;
                localStorage.setItem('id_token', token);
                    $location.path("/todo");
               })
               .error(function (data) {
                    //Do whatever is needed
                 console.log(data);
                   
               });  
      		

      	}	

  });

