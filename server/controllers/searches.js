'use strict';

(function(){
	var https = require('https');
	var mongoose = require('mongoose'),
		Search = mongoose.model('Search');

	function searchController(){
		
		this.all = function(req, res){
			//replace spaces with '+' for query
			var query = req.body.search.replace(' ','+');

			//grab API key from DB
			Search.find().exec(function(err, key){
				if(err)res.json(err);

				//setup for api call. results are sorted by viewCount and limited to the top 10.
				var options = {
					host: 'www.googleapis.com',
					path: '/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q='+query+'&type=channel&key='+key[0].value
				};
				var callback = function(response){
					var str = '';

					response.on('data', function(chunk){
						str += chunk;
					});

					//send json response to front-end
					response.on('end', function(){
						console.log(str);
						str = JSON.parse(str);
						res.json(str);
					});
				}

				https.request(options, callback).end();

			});
		}

	}

	module.exports = new searchController();

})();