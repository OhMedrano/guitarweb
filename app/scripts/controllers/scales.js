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

  
  	// Major scale formula 
  	$scope.majorScale = [0,2,4,5,7,9,11];
  	

  	//prints out major scale formula
  	console.log($scope.majorScale);

  	//make a empty scale object
  	$scope.scale = [];

  	//access the fret class in scales.html 
  	var frets = jQuery('.frets').children();
  	
  	//gather the notes in the scale from musicScale
  	$scope.scales = function(notes){

  		for(var i=0;i<$scope.majorScale.length;i++){
  			$scope.scale.push(notes[$scope.majorScale[i]]);
  			/*	for(var x=0;x<=frets.length;)*/
  		};


  		console.log($scope.scale);

  	}
  	$scope.scales($scope.musicScale);
  	console.log(angular.element('p').scope());

  	if('F'==angular.element('#note').scope()){
  		console.log('true');
  	} else
  	{
  		console.log('false');
  	};
 /* 		
			So what I'm trying to do is access the array value in the note ID.
			I can't seem to access the particular value of that scope, but I 
			can access the whole array itself. 
  	}*/



  });
