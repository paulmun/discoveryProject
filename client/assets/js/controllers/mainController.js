(function(){

	angular.module('main').controller('mainController', mainController);

	function mainController($scope, $location, searchFactory){
		$scope.searchText = '';
		$scope.results = [];
		$scope.errors = '';
		$scope.resultText = '';

		$scope.search = function(){
			searchFactory.search({search: $scope.searchText}, function(data){

				if(data.errors){
					$scope.errors = data.errors;
				} else{
					$scope.results = data;
					$scope.resultText = $scope.searchText;
					$scope.searchText = '';
				}
				
			});
		}
	};

})();