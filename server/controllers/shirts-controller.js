// require Shirts model
var Shirts = require('../models/shirts');

// taken from server.js .... app.post
module.exports.create = function (req, res){

	// Create a new instance of the
	var shirts = new Shirts(req.body);
	shirts.save(function (err, result){
		// pass result back as json
		res.json(result);
	});
};

module.exports.list = function (req, res){
	Shirts.find({}, function (err, results){
		res.json(results);
	});
};
