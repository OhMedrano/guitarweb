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
    

  	$scope.fretVar = [];

    $http.get('db/jsons/scales.json').success (function(data){
    	$scope.fretVar = data;
    	
    	});
    $scope.selectIndex = 0;
    $scope.fretPercent = function($index){
    	console.log($index);
    	$scope.selectIndex = $index;
    	return $scope.selectIndex;
    };

 });
  
  