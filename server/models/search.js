'use strict';

(function(){

	var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

	var SearchSchema = new Schema({
		value: {
			type: String,
			required: true,
			trim: true
		}
	});

	mongoose.model('Search', SearchSchema);
	
})();