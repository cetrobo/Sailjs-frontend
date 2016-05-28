'use strict';

angular.module('crud')
  .controller('TodoCtrl', function (User,$scope,listetodo,Todo,$http,$location) {

    $scope.isLogged = User.isLoggedIn();

    $scope.logout = function(){
        User.logout();
        $location.path("/signin");
      }
    
    $scope.listTodo=listetodo;
    
      $scope.delete=function(id){
         var removed=Todo.removeTodo(id);
         var confirmation=confirm("vous voulez vraiment supprimez todo ?");
           if(confirmation == true){
              removed.success(function (data) {
                alltodo();
            })
          .error(function (data) {
            console.log(data);
          });
        }
       };

        function alltodo(){
         var getTodo=Todo.allTodo();
          getTodo.success(function (data, status, headers, jwr) {
              $scope.listTodo=data;
          })
          .error(function (data, status, headers, jwr) {
              //console.log(status); 
              console.log(data);
          });
        }

  }).controller('navCtrl',function($scope,User,$location,$rootScope){

        $scope.logout = function(){
        User.logout();
        $location.path("/signin");
        $rootScope.isLogged=false;
      }
  });
