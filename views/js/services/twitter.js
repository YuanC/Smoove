angular.module('ChatHelperApp').factory('twitter', function($http) {
	var url = "/getTweets";

	return {
		getTweets: function(twitter_handle){
			$http.get(
				
			);
		}
	}

});