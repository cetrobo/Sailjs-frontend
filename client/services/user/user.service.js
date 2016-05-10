'use strict';

angular.module('crud').service('User', function ($sails,jwtHelper) {
    
	//console.log($sails);
    return {

    	signup:  function (data) {
        	return $sails.post('/api/user',data);       
    	},



    	signinn: function(data){

    		return $sails.get('/api/auth',data);
    	},



 
    } 

});
