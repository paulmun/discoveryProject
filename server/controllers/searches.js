(function(){

	var mongoose = require('mongoose'),
		Search = mongoose.model('Search');

	function searchController(){
		this.all = function(req, res){
			Search.find().exec(function(err, key){
				if(err)res.json(err);
				console.log(req.body, key);
			});
		}
		this.create = function(req, res){
			var key = new Search({value: req.body.search});

			console.log(key);

			key.save(function(err, key){
				if(err)res.json(err);
				else{
					console.log(key);
				}
			});
		}
	}

	module.exports = new searchController();

})();