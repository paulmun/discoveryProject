(function(){

	var searchController = require('../controllers/searches.js');

	module.exports = function(app){

		app.post('/search', function(req, res){
			console.log(req.body);
			searchController.all(req,res);
		});
		
	}

})();