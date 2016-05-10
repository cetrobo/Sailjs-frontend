'use strict';

angular.module('crud')
  .controller('SigninCtrl', function ($scope,$location,$http,User) {             


  	$scope.signin = function(){

    var data={ email:$scope.email,password:$scope.password}

  		 var user=User.signinn(data);
        //console.log(typeof user);
     user.success(function (data) {
                   
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

