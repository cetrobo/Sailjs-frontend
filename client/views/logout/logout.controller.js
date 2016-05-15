'use strict';

angular.module('crud')
  .controller('LogoutCtrl', function ($scope,User) {


    		 localStorage.removeItem('id_token');



  });
