'use strict';

(function(){

	angular.module('main').factory('searchFactory', searchFactory);

	function searchFactory($http){
		function SearchFactory(){
			this.search = function(query, callback){
				console.log(query);
				$http.post('/search', query).then(function(returnData){

					if(returnData.data.errors){
						console.log(returnData.data.errors);
						callback(returData.data);
					} else{
						callback(returnData.data.items);
					}

				});
			}
		}
		return new SearchFactory();
	}
		
})();