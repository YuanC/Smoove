var app = angular.module('ChatHelperApp', ['angular-popover']);


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
	['$scope', 'indico', '$http', '$timeout', 'gifs',
	function($scope, indico, $http, $timeout, gifs) {
	
	$scope.twitter_handle = "";
	$scope.loading = false;
	$scope.error = false;
	$scope.results = false;

	$scope.submitTwitterHandle = function(){
		$scope.loading = true;

		console.log($scope.twitter_handle);
		$http.get(
			'/getTweets/' + $scope.twitter_handle.replace("@","")
		).then(function(success){

			var text = success.data;
			console.log(text);

			indico.getTextTags(text, function(success){
				$scope.topics = success;

				gifs.getGifs($scope.topics, function(gif_array){
					$scope.gifs = gif_array;
					console.log($scope.gifs);
				});

			indico.getPersonality(text, function(success){
				$scope.personalities = success;

			indico.getPolitical(text, function(success){
				$scope.political_parties = success;


				$timeout(function(){
					$scope.loading = false;
					$scope.results = true;
				}, 1000);
			
			});});});

		}, function(failure){
			console.error(failure);
			$scope.loading = false;
			$scope.error = true;
		});

	}

}]);
