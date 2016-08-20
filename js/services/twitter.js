angular.module('ChatHelperApp').factory('twitter', function($http) {

	var consumerKey = encodeURIComponent("1qlaAqv2KUUqk6WTW4eERIhkM");
	var consumerSecret = encodeURIComponent("3sywrPAUkjDky8CBRl2nKUg5NUgwo8928cLQuYjscAM3q1sk5G");

	function getBearerToken(){
		var credentials = btoa(consumerKey + ':' + consumerSecret);

		$http.post(
			'https://api.twitter.com/oauth2/token'
			, "grant_type=client_credentials"
			, {
				headers: {
					'Authorization': 'Basic ' + credentials, 
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
				}
			}
		).then(function (success) {
			console.log("success");
			console.log(success);

		},function(failure){
			console.log("failure");
			console.log(failure);
		});
	}

	return {
		getBearerToken: getBearerToken
	}

});