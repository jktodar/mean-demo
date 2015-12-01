
angular.module('MainApp', ['ngResource', 'ui.router'])
	.controller('ShirtsController', ['$resource', function ($resource){

		var self = this;
		
		self.Shirts = $resource('/api/shirts');
			self.Shirts.query(function (results){
				self.shirtsArray = results;
		});

		self.shirtsArray = [];

		self.addShirt = function (){

			var shirt = new self.Shirts();
			shirt.name = self.newShirtName;
			shirt.color = self.newShirtColor;
			shirt.$save(function (result){
				self.shirtsArray.push(result);
			});
			self.newShirtName = '';
			self.newShirtColor = '';
			
		};

		self.deleteShirt = function (){
			console.log('hello');
		};

	}])

	.controller('ShortsController', function (){
		console.log('hello from ShortsController');
		var self = this;
	})

	.controller('HoodiesController', function (){
		console.log('hello from HoodiesController');
		var self = this;
	})

	.controller('MainController', function (){
		console.log('hello from MainController');

		var self = this;
		self.message = 'hello from MainController';
	});




