'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:gString
 * @description
 * # gString
 */
angular.module('guitarwebApp')
  .directive('gString', function () {
    return {
    	scope:{
    		root: '=root'
    	},
      templateUrl: 'templates/guitarString.html',
      restrict: 'E',
      
      link: function postLink(scope, element, attrs) {
       		scope.musicNotes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];

       	 scope.rootValue = scope.root;
       	 scope.note0 = scope.musicNotes[scope.rootValue];
       	 scope.note1 = scope.musicNotes[(scope.rootValue + 1) % 12];
       	 scope.note2 = scope.musicNotes[(scope.rootValue + 2) % 12];
       	 scope.note3 = scope.musicNotes[(scope.rootValue + 3) % 12];
       	 scope.note4 = scope.musicNotes[(scope.rootValue + 4 )% 12];
       	 scope.note5 = scope.musicNotes[(scope.rootValue + 5) % 12];
       	 scope.note6 = scope.musicNotes[(scope.rootValue + 6) % 12];
       	 scope.note7 = scope.musicNotes[(scope.rootValue + 7) % 12];
       	 scope.note8 = scope.musicNotes[(scope.rootValue + 8) % 12];
       	 scope.note9 = scope.musicNotes[(scope.rootValue + 9) % 12];
       	 scope.note10 = scope.musicNotes[(scope.rootValue + 10) % 12];
       	 scope.note11 = scope.musicNotes[(scope.rootValue + 11) % 12];
       	
      	console.log(scope.musicNotes);

      }
    };
  });


/*
	What I want this to do, is to 

	FIRST 
		Take a number value named root. Take root value, and place it on the root expression 
		gString. 
		

		Sadly, until I can figure this out later, each note will get its own variable. 

		So root will be x. Fret 1 will be y = x+1, fret 2 z = x+2 and so forth. 

		I'm going to have to add a modulo for when the value overflows the array length of musicNotes.


*/