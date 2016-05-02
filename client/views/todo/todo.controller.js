'use strict';

angular.module('crud')
  .controller('TodoCtrl', function ($scope,$routeParams,Todolist) {
  $scope.listTodo=Todolist.all();
  $scope.selectedTodo=null;

/*
  $scope.add=function() {
    $scope.listTodo.push=({
      id:$scope.id,
      message:$scope.message
    });

    $scope.id="";
    $scope.message="";
  }*/

  $scope.selectEdit =function(todo){
    //console.log(todo);
    $scope.selectedTodo=todo;

  }



    $scope.delete=function(index){
      
      var result=confirm("voulez vraiment supprimez cette element");

      //var index=getSelectedIndex(id); //get index
       //alert(index);
       if(result === true){

         $scope.listTodo.splice(index,1);

       }
      //slice
      //  console.log("after"+id);
    };




  });
