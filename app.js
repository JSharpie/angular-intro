(function(){
  "use strict";
  angular
    .module('colors', [
      'ngRoute'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<h1>hello angular</h1><a href="#/colors">go to colors</a>',
          controller: 'MainController'
        })
        .when('/colors', {
          templateUrl: 'views/colors/list.html',
          controller: 'ColorController'
        })
        .when('/addColor', {
          templateUrl: 'views/colors/create.html',
          controller: 'ColorController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'})

    });




})();
