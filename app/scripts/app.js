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
        controller: 'MainCtrl'
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
      .otherwise({
        redirectTo: '/'
      });
  });
