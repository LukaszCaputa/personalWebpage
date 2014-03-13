	// create the module and name it scotchApp
	var sampleApp = angular.module('sampleApp', ['ngRoute']);

	// configure our routes
	sampleApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'mainController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'mainController'
			});
	});

	// create the controller and inject Angular's $scope
	sampleApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = '';
		
	});



