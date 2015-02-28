angular.module('app', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
    	.state('home', {
      	url: '/home',
      	templateUrl : 'template/home.html'
    	})
			.state('monster', {
      	url: '/monster',
      	templateUrl : 'template/monster.html'
    	})
      .state('panigale', {
        url: '/panigale',
        templateUrl : 'template/panigale.html'
      })
      .state('multistrada', {
        url: '/multistrada',
        templateUrl : 'template/multistrada.html'
      })
      .state('diavel', {
        url: '/diavel',
        templateUrl : 'template/diavel.html'
      })
      .state('scrambler', {
        url: '/scrambler',
        templateUrl : 'template/scrambler.html'
      })
      ;
	})
  .controller('AppController', ['$scope', function($scope) {
    //
  }]);