'use strict';

(function(){

	angular.module('main').controller('mainController', mainController);

	function mainController($scope, $location, searchFactory){
		$scope.searchText = '';
		$scope.results = [];
		$scope.errors = '';
		$scope.resultText = '';
		$scope.firstSearch = true;
		$scope.subscribers = [];

		$scope.search = function(){
			searchFactory.search({search: $scope.searchText}, function(data){

				if(data.errors){
					$scope.errors = data.errors;
				} else{
					$scope.results = data;
					$scope.resultText = $scope.searchText;
					$scope.searchText = '';

					if($scope.firstSearch){
						$scope.firstSearch = !$scope.firstSearch;
					}
				}

			});
		}

		$scope.saveResults = function(){
			var query = $scope.resultText;
			var results = $scope.results;

			searchFactory.saveResults(query, function(data){
				if(data.errors){
					$scope.errors = data.errors;
				} else{
					$scope.resultText = '';


				}
			});
		}

		$scope.subscriberCount = function(idx){
			console.log('idx');
			console.log('controller');
			var chId = $scope.results[idx].id.channelId

			searchFactory.subscriberCount({chId: chId}, function(data){
				if(data.errors){
					$scope.errors = data.errors;
				} else{
					console.log(data[0]);
					$scope.subscribers[idx] = data[0];
				}
			});
		}

	}

})();