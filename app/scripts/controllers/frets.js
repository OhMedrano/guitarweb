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
   		{'name':'One-Half ','type':1,'color':'blue'},
   		{'name':'One-Third ','type':2,'color':'black'},
   		{'name':'One-Quarter ','type':3,'color':'purple'},
   		{'name':'One-Fifth ','type':4,'color':'green'}
   ];


   

   
 });
  
  