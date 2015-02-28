angular.module('app', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
    	.state('home', {
      	url: '/home',
      	template : '<h1 class="s1">Home 555</h1><p>faslkjfkajflkjaskfjaksfjaskjflkasfjlkasf</p>'
    	})
			.state('about', {
      	url: '/about',
      	template : '<h1 class="s2">About</h1>'
    	});
	})
  .controller('AppController', ['$scope', function($scope) {
    //
  }]);