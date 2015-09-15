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
        templateUrl: 'views/main.html',
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
      .otherwise({
        redirectTo: '/'
      });
  });
