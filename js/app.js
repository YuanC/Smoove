

var app = angular.module('ChatHelperApp', []);

app.config(function ($httpProvider) { // FOR LOCAL TESTING
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
}).controller('MainController', ['$scope', 'indico', 'twitter', function($scope, indico, twitter, $http) {
	
	$scope.twitter_handle = "";
	$scope.loading = false;

	$scope.submitTwitterHandle = function(){
		// PLACEHOLDER
		text = twitter_handle;
		indico.getTextTags(text);
	}
	// twitter.getBearerToken();

}]);
