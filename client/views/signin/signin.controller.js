'use strict';

angular.module('crud')
  .controller('SigninCtrl', function ($scope,$location,User,$http,Todo) {             

      
    $scope.isLogged = User.isLoggedIn();
    $scope.getallTodo = Todo.allTodo();
  	$scope.signin = function(){

    var data={email:$scope.email,password:$scope.password};
       
        User.signin(data).success(function (data) {
           // save the user data in the service 
           //var token=data.token;
           User.setUser(data);
           $location.path("/todo");
       }).error(function (data) {
           // TODO add alter here
           //console.log(data);
       });  
      } 

  });

