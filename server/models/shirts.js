// import mongoose
var mongoose = require('mongoose');

// Create Shirts model
module.exports = mongoose.model('Shirts', {
	name: String,
	color: String
});