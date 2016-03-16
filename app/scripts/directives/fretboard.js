'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:fretBoard
 * @description
 * # fretBoard
 */
angular.module('guitarwebApp')
  .directive('fretBoard', function () {
    return {
      templateUrl:'templates/fretBoard.html',
      replace:true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.musicNotes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
        scope.stringE = 7;
        scope.stringB = 2;
        scope.stringG = 10;
        scope.stringD = 5;
        scope.stringA = 0;
        scope.stringEe = 7;

        scope.currentNote0 = scope.musicNotes[scope.stringE];
      	scope.currentNote1 = scope.musicNotes[scope.stringB];
      	scope.currentNote2 = scope.musicNotes[scope.stringG];
      	scope.currentNote3 = scope.musicNotes[scope.stringD];
      	scope.currentNote4 = scope.musicNotes[scope.stringA];
      	scope.currentNote5 = scope.musicNotes[scope.stringeA];
/*
        scope.strings = [
        	"E": 7,
        	"B": 2,
        	"G": 10,
        	"D": 5,
        	"A": 0,
        	"Ee": 7

        ];

        console.log(scope.strings);*/

        scope.noteChangeE = function(){
      		var newNote = this;
      		scope.stringE = this.$index;
      		console.log(newNote)
      		
      	};
      	  scope.noteChangeB = function(){
      		var newNote = this;
      		scope.stringB = this.$index;
      		console.log(newNote)
      		console.log(scope.stringe);
      		return scope.stringe;
      	};
      	  scope.noteChangeG = function(){
      		var newNote = this;
      		scope.stringG = this.$index;
      		console.log(newNote)
      		console.log(scope.stringe);
      		return scope.stringe;
      	};
      	  scope.noteChangeD = function(){
      		var newNote = this;
      		scope.stringD = this.$index;
      		console.log(newNote)
      		console.log(scope.stringe);
      		return scope.stringe;
      	};
      	  scope.noteChangeA = function(){
      		var newNote = this;
      		scope.stringA = this.$index;
      		console.log(newNote)
      		console.log(scope.stringe);
      		return scope.stringe;
      	};
      	  scope.noteChangeEe = function(){
      		var newNote = this;
      		scope.stringEe = this.$index;
      		console.log(newNote)
      		console.log(scope.stringe);
      		return scope.stringe;
      	};

      	scope.$watch('stringE',function(newVal, oldVal){
      		scope.stringE = newVal;
      		console.log(newVal, oldVal);
      		console.log(scope.musicNotes[newVal], scope.musicNotes[oldVal]);
      		return scope.stringE;
      	})

      	scope.$watch('stringB',function(newVal, oldVal){
      		scope.stringB = newVal;
      		console.log(newVal, oldVal);
      		console.log(scope.musicNotes[newVal], scope.musicNotes[oldVal]);
      		return scope.stringB;
      	})
      	scope.$watch('stringG',function(newVal, oldVal){
      		scope.stringG = newVal;
      		console.log(newVal, oldVal);
      		console.log(scope.musicNotes[newVal], scope.musicNotes[oldVal]);
      		return scope.stringG;
      	})
      	scope.$watch('stringD',function(newVal, oldVal){
      		scope.stringD = newVal;
      		console.log(newVal, oldVal);
      		console.log(scope.musicNotes[newVal], scope.musicNotes[oldVal]);
      		return scope.stringD;
      	})
      	scope.$watch('stringA',function(newVal, oldVal){
      		scope.stringA = newVal;
      		console.log(newVal, oldVal);
      		console.log(scope.musicNotes[newVal], scope.musicNotes[oldVal]);
      		return scope.stringA;
      	})
      	scope.$watch('stringEe',function(newVal, oldVal){
      		scope.stringEe = newVal;
      		console.log(newVal, oldVal);
      		console.log(scope.musicNotes[newVal], scope.musicNotes[oldVal]);
      		return scope.stringEe;
      	})
      	console.log(scope.stringE);
      }
    };
  });
