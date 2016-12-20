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

			searchFactory.saveResults({data: $scope.results, query: $scope.resultText}, function(data){
				if(data.errors){
					$scope.errors = data.errors;
				} else{
					$scope.resultText = '';
					$scope.results = '';
					$scope.firstSearch = true;
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
						$scope.results[idx].statistics = data[0].statistics;
						$scope.showStats[idx] = true;
						console.log($scope.showStats);
					}
				});
			}
	
		}

		$scope.retrieveAll = function(){
			for(var i = 0; i < 10; i++){
				$scope.subscriberCount(i);
			}
		}

	}

})();