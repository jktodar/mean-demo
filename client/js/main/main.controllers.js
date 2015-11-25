
angular.module('MainApp', ['ngResource', 'ui.router'])
	.controller('ShirtsController', ['$resource', function ($resource){
		console.log('hello from ShirtsController');
		var self = this;
		
		self.Shirts = $resource('/api/shirts');


		self.testShirtsArr = [

			{name: 'Mens Long Sleeve',
			 color: 'black'
			},
			{name: 'Mens Short Sleeve',
			 color: 'blue'},
			{name: 'Womens Long Sleeve',
			 color: 'gray'}

		];

		self.addShirt = function () {

			var shirt = new self.Shirts();
			shirt.name = self.newShirtName;
			shirt.color = self.newShirtColor;
			shirt.$save(function (result){
				self.testShirtsArr.push(result);
			});

			// Hard-coded to self.testShirtsArr
			// self.testShirtsArr.push({name: self.newShirtName, color: self.newShirtColor})
			self.newShirtName = '';
			self.newShirtColor = '';
			// console.log(self.testShirtsArr);
		};

	}])
	.controller('ShortsController', function (){
	console.log('hello from ShortsController');
	var self = this;
})

.controller('HoodiesController', function (){
	console.log('hello from HoodiesController');
	var self = this;
});