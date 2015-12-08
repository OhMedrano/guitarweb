'use strict';

/**
 * @ngdoc function
 * @name guitarwebApp.controller:ScalesCtrl
 * @description
 * # ScalesCtrl
 * Controller of the guitarwebApp
 */
angular.module('guitarwebApp')
  .controller('ScalesCtrl', function ($scope) {
    
  	$scope.musicNotes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
  	/*  arrayIndex        0   1    2   3   4    5   6    7   8   9    10   11*/
  	/*  sliceIndex        1   2    3   4   5    6   7    8   9   10   11   12 */
  	$scope.musicScale = $scope.musicNotes;

  	console.log($scope.musicScale);

  	$scope.major = $scope.musicScale.slice(0,3);

  	$scope.majorScale = [0,3,5,6,8,9,11];
  	console.log($scope.major);
  	console.log($scope.majorScale);
  	
  	

 /* 	$scope.changeTune = function(tune){
  		var tuneVal = tune;



  	}*/
  	

  });
