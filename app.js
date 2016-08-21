(function() {
'use strict';

var express = require('express');
var http = require('http');
var exphbs = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Twit = require('twit');
//var twitter = require('./twitter');

var app = express();

var db = 'mongodb://localhost/chat-helper';
mongoose.connect(db, function () {
    console.log('connected to db ' + db);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true   
}));

app.use(express.static('views'));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	res.sendFile('./views/index.html' , { root : __dirname});
});

// Twit
var T = new Twit({
	consumer_key:         'U9ptEYteBqQV1d2YLs3SRLrZZ',
	consumer_secret:      'sccdbe49lWOvxV0f8rjuckEjAbYKj46Elq8LrCRJKu3dsqfcq9',
	access_token:         '81342065-OCyRxSm7jzfeth3lh0jRXKjC6UWPsrwQHhScAGQnt',
	access_token_secret:  'x8DHPIrPwjb0fY8E3P9zey3fzNoKmxSVupkV0TkaWEe1C',
  	timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

function getTweetsFromUser(user, callback) {
	T.get('statuses/user_timeline', { screen_name: user, count: 200 },  function (err, data, response) {
  		if(err)
  		{
  			callback(err);
  			console.log(err);
  		}
  		else
  		{
	  		var string = '';
	  		for(var i = 0; i < data.length; i++)
	  		{
	  			string += data[i].text;
	  		}
	  		console.log(string);
	  		callback(null, string);	
  		}
  		
	})
}

app.get('/getTweets/:user', function (req, res) {
	var user = req.params.user;
	console.log('Getting tweets from ' + user);
	getTweetsFromUser(user.toString(), function (err, tweets) {
		if (err) {
			if(err) throw err;
		} else {
			res.send(tweets);
		}
	});

	//res.sendStatus(200);
});


// Set Port
app.set('port', (process.env.PORT || 3000));

// 404 route
app.get('*', function(req, res){
    res.render('404');
});



app.listen(app.get('port'), function(){
	console.log('Server started on port '+ app.get('port')); 
});



})();