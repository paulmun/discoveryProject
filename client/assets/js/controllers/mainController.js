'use strict';

(function(){

	angular.module('main').controller('mainController', mainController);

	function mainController($scope, $location, searchFactory){
		$scope.searchText = '';
		$scope.results = [];
		$scope.errors = '';
		$scope.resultText = '';
		$scope.firstSearch = true;
		$scope.stats = [];
		$scope.showStats = [];

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
			var chId = $scope.results[idx].id.channelId

			if(!$scope.showStats[idx]){
				searchFactory.subscriberCount({chId: chId}, function(data){
					if(data.errors){
						$scope.errors = data.errors;
					} else{
						console.log(data[0]);
						$scope.stats[idx] = data[0];
						$scope.showStats[idx] = true;
						console.log($scope.showStats);
					}
				});
			}
			
		}

	}

})();