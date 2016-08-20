
angular.module('ChatHelperApp').
	factory('indico', ['$http', function($http) {

	var api_key = 'f844248f8582881cdf65b74c1718d0ac',
		api_url_tags = 'https://apiv2.indico.io/texttags?version=2',
		api_url_personality = 'https://apiv2.indico.io/keywords?version=2',
		api_url_political = 'https://apiv2.indico.io/keywords?version=2';


	function getPolitical(text){
		$http.post(
			api_url_political,
			JSON.stringify({
				'api_key': api_key,
				'data': text,
				'threshold': 0.1
			})
		).then(function(res) {
			var word_array = [];
			var result = res.data.results;

			console.log(result);

			for (var key in result) {
				word_array.push({
					word: key,
					value: result[key]
				});
			}

			word_array.sort(function(a, b){return b.value - a.value});
			console.log(word_array);
			return word_array;
		}, function(error){
			console.log(error);
		});
	}

	function getPersonality(text){
		$http.post(
			api_url_personality,
			JSON.stringify({
				'api_key': api_key,
				'data': text,
				'threshold': 0.1
			})
		).then(function(res) {
			var word_array = [];
			var result = res.data.results;

			console.log(result);

			for (var key in result) {
				word_array.push({
					word: key,
					value: result[key]
				});
			}

			word_array.sort(function(a, b){return b.value - a.value});
			console.log(word_array);
			return word_array;
		}, function(error){
			console.log(error);
		});
	}

	function getTextTags(text){
		$http.post(
			api_url_tags,
			JSON.stringify({
				'api_key': api_key,
				'data': text,
				'threshold': 0.1
			})
		).then(function(res) {
			var word_array = [];
			var result = res.data.results;

			console.log(result);

			for (var key in result) {
				word_array.push({
					word: key,
					value: result[key]
				});
			}

			word_array.sort(function(a, b){return b.value - a.value});
			console.log(word_array);
			return word_array;
		}, function(error){
			console.log(error);
		});
	}
	function getAnalysis(text){
		return {
			tags: getTextTags(),
			political: getPolitical(),
			personality: getPersonality()
		}
	}

	return {
		getTextTags: getTextTags
	}
}]);