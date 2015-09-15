'use strict';

/**
 * @ngdoc function
 * @name guitarwebApp.controller:FretsCtrl
 * @description
 * # FretsCtrl
 * Controller of the guitarwebApp
 */
angular.module('guitarwebApp')
  .controller('FretsCtrl', function ($scope, $routeParams, $http, frettin) {
    $http.get('db/jsons/scales.json').success (function(data){
    	$scope.fretVar = data;
    });
  });
  