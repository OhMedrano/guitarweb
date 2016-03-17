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
      	
      	scope.majorScale = [0,2,4,5,7,9,11];

      	scope.allScales = {

      		Major: ['Major',[0,2,4,5,7,9,11]],
      		Minor: ['Minor',[0,2,3,5,7,8,10]]


      	};

      	scope.minorScale = [];
      	scope.currentScale = [];
      	scope.emptyScale = [];
      

      	scope.pickin = function(){
      		var picked  = this;
      		scope.pickedScale = picked;

      		console.log(scope.pickedScale);

      	};
      	scope.chooseScale = function(scale,key){

      		var keyNotes = [];
      		 
      		var scales = scale;
      		var alteredNotes = [];

      		for(var x=0;x<scope.musicNotes.length-1;x++){
      			if(x == key){
      				alteredNotes.push(x);
      					for(var i=1;i<scope.musicNotes.length;i++){
      						alteredNotes.push((x+i)%12);
      					}

      				} 
      			}

      		for(var y=0;y<scales.length;y++){
      			keyNotes.push(alteredNotes[scales[y]]);

      		};

      			console.log(alteredNotes);
      			console.log(keyNotes);
      		};



	scope.chooseScale(scope.majorScale, 10); 


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
        //Individual string note change functions cause I'm a noob...
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
      	// End

      	//All strings tuning 

      	scope.standardTune = function(){
      		scope.stringE = 7;
      		scope.stringB = 2;
      		scope.stringG = 10;
      		scope.stringD = 5;
      		scope.stringA = 0;
      		scope.stringEE = 7;
      	};
      	scope.fullStep = function(){
      		scope.stringE = 5;
      		scope.stringB = 0;
      		scope.stringG = 8;
      		scope.stringD = 3;
      		scope.stringA = 10;
      		scope.stringEE = 5;
      	};
      	scope.openD = function(){
      		scope.stringE = 5;
      		scope.stringB = 0;
      		scope.stringG = 9;
      		scope.stringD = 5;
      		scope.stringA = 0;
      		scope.stringEe = 5;
      	};




      	//



      	scope.$watchGroup(['stringE','stringB','stringG','stringD','stringA','stringEe'],function(newVal, oldVal){
      		scope.stringE = newVal[0];
      		scope.stringB = newVal[1];
      		scope.stringG = newVal[2];
      		scope.stringD = newVal[3];
      		scope.stringA = newVal[4];
      		scope.stringEe = newVal[5];
      		console.log(newVal, oldVal);
      		console.log(scope.musicNotes[newVal], scope.musicNotes[oldVal]);
      		return scope.stringE;
      	})
/*
      	scope.$watch('stringB',function(newVal, oldVal){
      		scope.stringB = newVal;
      		console.log(newVal, oldVal);
      		console.log(scope.musicNotes[newVal], scope.musicNotes[oldVal]);
      		return scope.stringB;
      	})*/
      	/*scope.$watch('stringG',function(newVal, oldVal){
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
      	})*/
      	console.log(scope.stringE);
      }
    };
  });
