'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:stringSelection
 * @description
 * # stringSelection
 */
angular.module('guitarwebApp')
  .directive('stringSelection', function () {
    return {
    	scope:{
    		stringe: '=stringe',
    		stringb: '=stringb',
    		stringg: '=stringg',
    		stringd: '=stringd',
    		stringa: '=stringa',
    		stringee: '=stringee'
    	},	
    	
      templateUrl:'templates/stringSel.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	scope.musicNotes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
      	scope.stringTtl = 6;
      	scope.currentNote0 = scope.musicNotes[scope.stringe];
      	scope.currentNote1 = scope.musicNotes[scope.stringb];
      	scope.currentNote2 = scope.musicNotes[scope.stringg];
      	scope.currentNote3 = scope.musicNotes[scope.stringd];
      	scope.currentNote4 = scope.musicNotes[scope.stringa];
      	scope.currentNote5 = scope.musicNotes[scope.stringee];


  		
      	
  		

      }
    };
  });
