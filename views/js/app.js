var app = angular.module('ChatHelperApp', []);


app.config(function ($httpProvider) { // FOR LOCAL TESTING
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
}).filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
}).controller('MainController', 
	['$scope', 'indico', '$http', '$timeout',
	function($scope, indico, $http, $timeout) {
	
	$scope.twitter_handle = "";
	$scope.loading = false;
	$scope.error = false;
	$scope.results = false;

	$scope.submitTwitterHandle = function(){
		console.log($scope.twitter_handle);
		$http.get(
			'/getTweets/' + $scope.twitter_handle.replace("@","")
		).then(function(success){

			var text = success.data;
			console.log(text);

			indico.getTextTags(text, function(success){
				$scope.topics = success;

			indico.getPersonality(text, function(success){
				$scope.personalities = success;

			indico.getPolitical(text, function(success){
				$scope.political_parties = success;

				$scope.loading = false;
				$scope.results = true;
			});
			});
			});

		}, function(failure){
			console.error(failure);
			$scope.loading = false;
			$scope.error = true;
		});

	}

}]);
