'use strict';

(function(){

	var searchController = require('../controllers/searches.js');

	module.exports = function(app){

		app.post('/search', function(req, res){
			searchController.all(req,res);
		});
		
	}

})();