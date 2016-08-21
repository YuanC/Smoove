var app = angular.module('ChatHelperApp', []);


app.config(function ($httpProvider) { // FOR LOCAL TESTING
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
}).controller('MainController', ['$scope', 'indico', function($scope, indico, $http) {
	
	$scope.twitter_handle = "";
	$scope.loading = false;
	$scope.results = false;
	$scope.data = {};

	$scope.submitTwitterHandle = function(){
		$scope.loading = true;

		$scope.data = indico.getAnalysis($scope.twitter_handle);
	}

}]);
