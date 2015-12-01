(function() {
  'use strict';

  // angular
  //   .module('MainApp')
  //   .config(routerConfig);

  // /** @ngInject */
  // function routerConfig($stateProvider, $urlRouterProvider, UI_ROUTES) {
    
  //   $stateProvider
  //     .state(UI_ROUTES.kHomeState.stateName, {

  //       url: '/',
  //       templateUrl: 'api/shirts.html',
  //       controller: 'MainController as ctrl',
  //     })
  //     ;

  //   $urlRouterProvider.otherwise('/');
  // }

angular
  .module('MainApp')
  .config([
'$stateProvider',
'$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/js/main/main.html',
      controller: 'MainController as ctrl'
    })
    .state('shirts', {
      url: '/shirts',
      templateUrl: '/js/main/shirts.html',
      controller: 'ShirtsController as ctrl'
    })
    // .state('about', {
    //   url: '/about',
    //   templateUrl: 'partials/about.html',
    //   controller: 'formController'
    // })
    ;


  $urlRouterProvider.otherwise('home');
}]);

// console.log('HI there from routes Page');


})();

// app.config([
// '$stateProvider',
// '$urlRouterProvider',
// function($stateProvider, $urlRouterProvider) {

//   $stateProvider
//     .state('home', {
//       url: '/home',
//       templateUrl: '/home.html',
//       controller: 'MainCtrl'
//     });

//   $urlRouterProvider.otherwise('home');
// }]);




