'use strict';

(function(){

	var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

	var SearchResultSchema = new Schema({
		title: {
			type: String,
			required: true,
			trim: true
		},
		description: {
			type: String,
			required: false,
			trim: true
		},
		id: {
			type: String,
			required: true,
			trim: true
		},
		subscribers: {
			type: Number,
			required: true
		},
		videoCount: {
			type: Number,
			required: true
		},
		viewCount: {
			type: Number,
			required: true
		},
		query: {
			type: String,
			required: true
		},
		time : { 
			type : Date, 
			default: Date.now 
		}
	});

	mongoose.model('SearchResult', SearchResultSchema);
	
})();