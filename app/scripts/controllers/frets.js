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
   		{'name':'Half ','type':1,'color':'blue','fract':'1\\2'},
   		{'name':'Third ','type':2,'color':'black','fract':'1\\3rd'},
   		{'name':'Quarter ','type':3,'color':'purple','fract':'1\\4th'},
   		{'name':'Fifth ','type':4,'color':'green','fract':'1\\5th'}
   ];


   

   
 });
  
  