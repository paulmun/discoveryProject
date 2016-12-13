(function(){

	angular.module('main', ['ngRoute']).config(config);

	function config($routeProvider, $locationProvider){
		$locationProvider.hashPrefix('');

		$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'mainController'
		})
		.otherwise('/');

	}

})();