angular.module('ChatHelperApp')
.factory('gifs', ['$http', function($http) {
	var url = 'http://api.giphy.com/v1/gifs/search';
	
	return {
		getGifs: function(tags_array, callback){
			var gif_query_string = tags_array[0].word.split(" ").join("+")
					+ "+" + tags_array[1].word.split(" ").join("+")
					+ "+" + tags_array[2].word.split(" ").join("+")
					+ "+" + tags_array[3].word.split(" ").join("+")
					+ "+" + tags_array[4].word.split(" ").join("+");

			$http.get(url, {
				params: {
					api_key: "dc6zaTOxFJmzC",
					q: gif_query_string,
					limit: 7
				}
			}
			).then(function(success){
				var gif_array = success.data.data;
				console.log(gif_array);
				callback(gif_array);
			});
		}
	}

}]);