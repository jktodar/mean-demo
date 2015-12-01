var express						= require('express'),
	  app 							= express(),
	  bodyParser 				= require('body-parser'),
	  mongoose 					= require('mongoose'),
	  logger 						= require('morgan'),
	  ShirtsController 	= require('./server/controllers/shirts-controller.js');

console.log('server.js - I run once...');

/*
 * Connect mongoose to mongodb... i.e., giving mongoose the location of our server
 */
// mongoose.connect('mongodb://localhost:27017/mean-demo');
mongoose.connect('mongodb://localhost:27017/mean-demo');

/*
 * Use body-parser(npm install body-parser, included in node-modules) to parse json
 */
 app.use(bodyParser());

/*
 * Logs all requests to the terminal
 */
 app.use(logger('tiny'));

/*
 * When a GET request is made to the root directory, 
 * respond with index.html page in the structure below.
 */
app.get('/', function (req, res) {
	// <Directory "/Applications/XAMPP/xamppfiles/apache2/htdocs/index.php">
	console.log('localhost:4200/ - I run on every browser request for / ...');
	res.sendFile(__dirname + '/server/index.html');

});

app.get('/foo', function (req, res) {
	res.send('I am Foo');
});

/*
 * Set request that ends in js will be set to client/js 
 * This just cuts out having to type /client/js for every request
 */
app.use('/js', express.static(__dirname + '/client/js'));

app.use('/CSS', express.static(__dirname + '/client/CSS'));
app.use('/css', express.static(__dirname + '/bower_components/bootstrap/dist/css'));


// REST APIs below
/*
 * Create a POST route for ShirtsController
 * Post request and response to specified url
 */
app.post('/api/shirts', ShirtsController.create);

/*
 * Create a GET route for ShirtsController
 */
app.get('/api/shirts', ShirtsController.list);


/*
 * Set port to 4200 and listen for requests
 * console log message
 */
app.listen(4200, function (){
	console.log('I am listening');
});