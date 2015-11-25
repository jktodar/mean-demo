var express						= require('express'),
	  app 							= express(),
	  bodyParser 				= require('body-parser'),
	  mongoose 					= require('mongoose'),
	  ShirtsController 	= require('./server/controllers/shirts-controller.js');


/*
 * Connect mongoose to mongodb... i.e., giving mongoose the location of our server
 */
mongoose.connect('mongodb://localhost:27017/mean-demo');

/*
 * Use body-parser(npm install body-parser, included in node-modules) to parse json
 */
 app.use(bodyParser());

/*
 * When a GET request is made to the root directory, 
 * respond with index.html page in the structure below.
 */
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

/*
 * Set request that ends in js will be set to client/js 
 * This just cuts out having to type /client/js for every request
 */
app.use('/js', express.static(__dirname + '/client/js'));

/*
 * Post request and response to specified url
 */
app.post('/api/shirts', ShirtsController.create);

/*
 * Set port to 4200 and listen for requests
 * console log message
 */
app.listen(4200, function (){
	console.log('I am listening');
});