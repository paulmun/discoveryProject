'use strict';

(function(){

	angular.module('main').factory('searchFactory', searchFactory);

	function searchFactory($http){
		function SearchFactory(){

			this.search = function(query, callback){
				$http.post('/search', query).then(function(returnData){
					if(returnData.data.errors){
						console.log(returnData.data.errors);
						callback(returData.data);
					} else{
						console.log(returnData.data.items)
						callback(returnData.data.items);
					}
				});
			}

			// this.saveResults = function(query, )

			this.subscriberCount = function(chId, callback){
				console.log('factory');
				$http.post('/searchId', chId).then( function(returnData){
					if(returnData.data.errors){
						console.log(returnData.data.errors);
						callback(returnData.data);
					} else{
						console.log(returnData.data);
						callback(returnData.data.items);
					}
				});
			}
		}
		return new SearchFactory();
	}
		
})();