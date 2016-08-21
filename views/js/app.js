var app = angular.module('ChatHelperApp', []);


app.config(function ($httpProvider) { // FOR LOCAL TESTING
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
}).controller('MainController', ['$scope', 'indico', '$http', function($scope, indico, $http) {
	
	$scope.twitter_handle = "";
	$scope.loading = false;
	$scope.error = false;
	$scope.results = false;

	$scope.submitTwitterHandle = function(){

		$http.get(
			'/getTweets/' + $scope.twitter_handle
		).then(function(success){
			console.log(success);
			$scope.topics = indico.getTextTags($scope.twitter_handle);
			$scope.personality = indico.getPersonality($scope.twitter_handle);
			$scope.political = indico.getPolitical($scope.twitter_handle);

			$scope.loading = false;
			$scope.results = true;

		}, function(failure){
			console.error(failure);
			$scope.loading = false;
			$scope.error = true;
		});

	}

}]);
