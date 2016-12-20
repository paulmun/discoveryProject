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

			this.saveResults = function(request, callback){
				console.log('factory.saveResults')
				console.log(request);
				$http.post('/searchResult', request).then( function(returnData){
					if(returnData.data.errors){
						console.log(returnData.data.errors);
						callback(returnData.data);
					} else{
						console.log(returnData.data);
						callback(returnData.data);
					}
				});
			}

			this.subscriberCount = function(chId, callback){
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