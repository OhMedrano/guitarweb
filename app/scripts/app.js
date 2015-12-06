'use strict';

/**
 * @ngdoc overview
 * @name guitarwebApp
 * @description
 * # guitarwebApp
 *
 * Main module of the application.
 */
angular
  .module('guitarwebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/frets.html',
        controller: 'FretsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/frets',{
        templateUrl:'views/frets.html',
        controller: 'FretsCtrl'
      })
      .when('/scales', {
        templateUrl: 'views/scales.html',
        controller: 'ScalesCtrl'
      })
      .when('/main',{
        templateUrl:'views/main.html',
        controler: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/frets.html'
      });
  });
