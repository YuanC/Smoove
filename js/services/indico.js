angular.module('chatHelperApp', []).
	factory('indico', ['$http', function($http) {

	var api_key = 'f844248f8582881cdf65b74c1718d0ac',
		api_url = 'https://apiv2.indico.io/keywords?version=2';

	function getKeywords(text){
		$http.post(
			api_url,
			JSON.stringify({
				'api_key': "YOUR_API_KEY",
				'data': text,
				'threshold': 0.1
			}
		).then(function(res) {
			var word_array = [];
			console.log(res);
		});
	}

	return {
		getKeywords: getKeywords
	}
}]);