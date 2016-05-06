'use strict';

angular.module('crud').service('User', function ($sails) {
    
	//console.log($sails);
    return {

    	signup:  function (data) {
        	return $sails.post('/api/user',data);       
    	}
    } 

});
