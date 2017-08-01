angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('entrar', {
    url: '/page3',
    templateUrl: 'templates/entrar.html',
    controller: 'entrarCtrl'
  })

  .state('cadastroTrainer', {
    url: '/page5',
    templateUrl: 'templates/cadastroTrainer.html',
    controller: 'cadastroTrainerCtrl'
  })

  .state('configurarPerfil', {
    url: '/page6',
    templateUrl: 'templates/configurarPerfil.html',
    controller: 'configurarPerfilCtrl'
  })

  .state('busca', {
    url: '/page7',
    templateUrl: 'templates/busca.html',
    controller: 'buscaCtrl'
  })

  .state('filtroI', {
    url: '/page8',
    templateUrl: 'templates/filtroI.html',
    controller: 'filtroICtrl'
  })

  .state('filtroIIRefino', {
    url: '/page9',
    templateUrl: 'templates/filtroIIRefino.html',
    controller: 'filtroIIRefinoCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});