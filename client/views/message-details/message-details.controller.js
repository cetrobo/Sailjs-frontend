'use strict';

angular.module('crud')
  .controller('MessageDetailsCtrl', function ($scope,$routeParams,Todolist) {

    $scope.todo=Todolist.getById($routeParams.id);



  });
