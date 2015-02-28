angular.module('app', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
    	.state('home', {
      	url: '/home',
      	templateUrl : 'template/home.html'
    	})
			.state('about', {
      	url: '/about',
      	template : '<h1 class="s2">About</h1>'
    	});
	})
  .controller('AppController', ['$scope', function($scope) {
    //
  }]);