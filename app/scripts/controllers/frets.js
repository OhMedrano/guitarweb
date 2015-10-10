'use strict';

/**
 * @ngdoc function
 * @name guitarwebApp.controller:FretsCtrl
 * @description
 * # FretsCtrl
 * Controller of the guitarwebApp
 */
angular.module('guitarwebApp')
  .controller('FretsCtrl', function ($scope, $routeParams, $http, frettin,
  									$parse, $interpolate) {
    

  	$scope.fretVar = [];

    $http.get('db/jsons/scales.json').success (function(data){
    	$scope.fretVar = data;
    	
    	});
   
   $scope.fretRatios = [
   		{'name':'One-Half ','type':1,'color':'#0000FF'},
   		{'name':'One-Third ','type':2,'color':'#000000'},
   		{'name':'One-Quarter ','type':3,'color':'#44FF22'},
   		{'name':'One-Fifth ','type':4,'color':'#6622bb'}
   ];

 });
  
  