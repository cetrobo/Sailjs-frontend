'use strict';

angular.module('crud').service('User', function ($http) {
    	           
    return {

        getUserId : function(id){

            return $http.get('https://matodo-backend.herokuapp.com/api/user/'+id);
        },
        getListeUser :function(){
            return $http.get('https://matodo-backend.herokuapp.com/api/user');
        },

        deleteUser:function(id){
            return $http.delete('https://matodo-backend.herokuapp.com/api/user/'+id);
        },
        updateUser :function(id,user){
            return $http.put('https://matodo-backend.herokuapp.com/api/user/'+id,user);
        },
    	signup:  function (data) {
        	return $http.post('https://matodo-backend.herokuapp.com/api/user',data);       
    	},

    	signin: function(data){
    		return $http.post('https://matodo-backend.herokuapp.com/api/auth',data);
    	},
        isLoggedIn : function(){
            return this.getUser();
        },

        logout: function(){
            localStorage.removeItem("User");
        },
        setUser : function(aUser){ 
            //sauvegarder l object User et le convertir en chaine de caractere   
            localStorage.setItem('User', JSON.stringify(aUser));
        },
        getUser : function(){
            // retourn l'objet User apres l avoir convertis en JSON
            try {
                return JSON.parse(localStorage.getItem("User"));
            } catch (e) {
                console.error("Parsing error:", e);
                // supprimer l objet user qui ne contient pas un string json valide 
                localStorage.removeItem("User");
                return null;
            }          
        }

    } 

});
