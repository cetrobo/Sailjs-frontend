'use strict';

angular.module('crud')
  .controller('ProfileCtrl', function (listeUser,$scope,User,$location) {

      $scope.isLogged = User.isLoggedIn();
      $scope.ListeUser=listeUser;
      
      $scope.delete=function(id){
       var deleteUser=User.deleteUser(id);
       var confirmation=confirm("vous voulez vraiment supprimez ce user ?");
            if(confirmation == true){
              deleteUser.success(function (data) {
                Listeuser();
            })
          .error(function (data) {
            console.log(data);
          });
        }
      };

        $scope.logout = function(){
          User.logout();
          $location.path("/signin");
      }

       function Listeuser(){
          	var ListeUser=User.getListeUser();
          	ListeUser.success(function(data){
          		$scope.ListeUser=data;
          	}).error(function(data){
          		console.log(data);
          	});
           }
  });
