

var app = angular.module('ChatHelperApp', []);

app.controller('MainController', ['$scope','indico', function($scope, indico) {

	$scope.twitter_handle = "@";

	$scope.submitTwitterHandle = function(){

		// PLACEHOLDER
		text = "Oh oh oh oh oh oh, Oh oh oh oh oh oh. You think I'm funny when I tell the punchline wrong. You just gotta ignite the light and let it shine! Never planned that one day I'd be losing you. Boy, you should know what you're falling for. Last Friday night, yeah I think we broke the law, always say we're gonna stop. You could travel the world but nothing comes close to the golden coast.Are you ready for, ready for. All night they're playing, your song. Saw you downtown singing the Blues. We drove to Cali and got drunk on the beach. You think I'm pretty without any makeup on. Be your teenage dream tonight. Come on, show 'em what you're worth.Think the city towed my car, chandeliers on the floor. Yeah, she's so in demand. You're reading me like erotica, boy, you make me feel exotic, yeah. I'll be your gift, give you something good to celebrate. Stinging like a bee I earned my stripes. What's up your sleeve, such a tease. She eats your heart out. Like Jeffrey Dahmer (woo).";
		indico.getTextTags(text);
	}

}]).config(function ($httpProvider) { // FOR LOCAL TESTING
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
});;