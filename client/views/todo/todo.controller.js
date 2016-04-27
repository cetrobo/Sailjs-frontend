'use strict';

angular.module('crud')
  .controller('TodoCtrl', function ($scope) {


  	$scope.listTodo=[
  	{
  		id:'a01',
  		nom:'achraf',
  		email:'achraf.benaomar@gmail.com'
  	},
  	{
  		id:'a02',
  		nom:'younes',
  		email:'younes.benaomar@gmail.com'
  	},

  	{
  		id:'a03',
  		nom:'souhail',
  		email:'souhail.benaomar@gmail.com'
  	}

  	];


;


  $scope.add=function() {
    $scope.listTodo.push=({
      id:$scope.id,
      nom:$scope.nom,
      email:$scope.email
    });

    $scope.id="";
    $scope.nom="";
    $scope.email="";
  }
  $scope.selectEdit =function(id){
    
    var index=getSelectedIndex(id);
    var todo=$scope.listTodo[index];
    $scope.id=todo.id;
    $scope.nom=todo.nom;
    $scope.email=todo.email;

  }


  $scope.edit=function(){

      var index=getSelectedIndex($scope.id);
      $scope.listTodo[index].id=$scope.id;
      $scope.listTodo[index].nom=$scope.nom;
      $scope.listTodo[index].email=$scope.email;

  }

    $scope.delete=function(id){
        //console.log("id object",id);
      //console.log("before"+id);
      var result=confirm("voulez vraiment supprimez cette element");

       var index=getSelectedIndex(id); //get index
       //alert(index);
       if(result === true){

         $scope.listTodo.splice(index,1);

       }
      //slice
      //  console.log("after"+id);
    };

/*
    $scope.getindex=function(index){

      console.log(index);

getindex($index)

    }*/

    function getSelectedIndex(id){


    	for(var i=0;i<$scope.listTodo.length;i++){

    			//console.log($scope.listTodo[i]);
    			if($scope.listTodo[i].id == id){
    				return i;
    			}

    	}


    };



  });
