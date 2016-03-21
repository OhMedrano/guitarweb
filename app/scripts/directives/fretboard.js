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
        scope.musicNotes = ["A","A#/Bb","B","C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab"];
       


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
      	scope.minorScale = [0,2,3,5,7,8,10];
      	scope.pickedScale = [];
        scope.pickedChord = [];
      	scope.shownNotes = [];
      	scope.currentScale = scope.majorScale;
        scope.currentChord = scope.pickedChord;
      	scope.emptyScale = [];
      	scope.nameScale;
        name.nameChord;
      	scope.allScale = [

                          {"name":"Major/Ionian","scale":[0,2,4,5,7,9,11]},
      						        {"name":"Minor/Aeolian","scale":[0,2,3,5,7,8,10]},
      						        {"name":"Dorian","scale":[0,2,3,5,7,9,10]},
      						        {"name":"Phrygian","scale":[0,1,3,5,7,8,10]},
      						        {"name":"Lydian","scale":[0,2,4,6,7,9,11]},
      						        {"name":"Mixolydian","scale":[0,2,4,5,7,9,10]},
      						        {"name":"Locrian","scale":[0,1,3,5,6,8,10]},
      						        {"name":"Minor Pentatonic","scale":[0,3,5,7,10]},
      						        {"name":"Major Pentatonic","scale":[0,2,4,7,9]},
      						        {"name":"Minor Blues","scale":[0,3,5,6,7,10]},
      						        {"name":"Harmonic Minor","scale":[0,2,3,5,7,8,11]},
      						        {"name":"Melodic Minor","scale":[0,2,3,5,7,9,11]},
      						        {"name":"Diminished / 8-Tone","scale":[0,2,3,5,6,8,11]}


      						];

          scope.chords = [
                        {"name":"Major","forumla":[0,4,7]},
                        {"name":"Minor","forumla":[0,3,7]},
                        {"name":"6th ","forumla":[0,4,7,9]},
                        {"name":"7th ","forumla":[0,4,7,10]},
                        {"name":"9th ","forumla":[0,4,7,10,2]},
                        {"name":"13th (Almost Impossible)","forumla":[0,4,7,10,2,5,9]},
                        {"name":"Major 7th","forumla":[0,4,7,11]},
                        {"name":"Minor 7th","forumla":[0,3,7,10]},


          ];
      	scope.emptyScale = function(){
          scope.pickedScale = [];
        };
        scope.emptyChord = function(){
          scope.pickedChord = [];
        }
      	scope.toneValue = 3;
      	scope.pickin = function(scale){
      		var pickedS = scale.scale;
      		var pickedName = scale.name;
      		console.log(pickedS);
      		scope.nameScale = pickedName;
      		scope.pickedScale = pickedS;

      		console.log(scope.pickedScale);

      		return scope.pickedScale, scope.nameScale;
      	};
        scope.pickC = function(chord){
          var pickedF = chord.forumla;
          var pickedA = chord.name;

          scope.nameChord = pickedA;
          scope.pickedChord = pickedF;

          return scope.pickedChord, scope.nameChord;
        }
      	scope.toneSelect = function(tone){
      		var toned = tone;

      		console.log(toned);

      		scope.toneValue = toned;
      		return scope.toneValue;
      	};

        scope.chooseChord = function(chord,key){
          var chorde = [];

          var alteredKey = [];

          for(var x=0;x<scope.musicNotes.length;x++){
            if(x == key){
              alteredKey.push(x);
                for(var i=1;i<=scope.musicNotes.length-1;i++){
                  alteredKey.push((x+i)%12);
                }
            }
          }

          for(var y=0;y<=chord.length-1;y++){
            chorde.push(alteredKey[chord[y]]);
          }

          scope.currentChord = chorde;
        };




        
      	// Choosing the right notes in the given scale
      	scope.chooseScale = function(scale,key){

      		var keyNotes = [];
      		
      		
      		var alteredNotes = [];

      		for(var x=0;x<scope.musicNotes.length;x++){
      			if(x == key){
      				alteredNotes.push(x);
      					for(var i=1;i<=scope.musicNotes.length-1;i++){
      						alteredNotes.push((x+i)%12);
      					}

      				} 
      			}

      		for(var y=0;y<=scale.length-1;y++){
      			keyNotes.push(alteredNotes[scale[y]]);
      			
      		};

      			console.log(alteredNotes);
      			console.log(keyNotes);
      			scope.currentScale = keyNotes;
      			console.log('This is current scale ' + scope.currentScale);
      			console.log('The notes are '+scope.shownNotes);
      			
      		};
      	// End

      	scope.changedScale = function(scale){
      		for(var z=0;z<scale.length-1;z++){
      			scope.shownNotes.push(scope.musicNotes[scope.currentScale[z]]);
      		}
      		console.log(scope.shownNotes);
      	}
	
      	

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
        //Active toggles for string tuning
        scope.toggleObjecte = {item:-1};
        scope.toggleObjectb = {item:-1};
        scope.toggleObjectg = {item:-1};
        scope.toggleObjectd = {item:-1};
        scope.toggleObjecta = {item:-1};
        scope.toggleObjectee = {item:-1};

        //Active toggles for whole tuning
        scope.toggleTuning = {item:-1};


        //
        //Active toggles for chords
        scope.toggleChord = {item:-1};

        //active Toggles for scales
        scope.toggleScale = {item:-1};



        //

        //active toggle for tone selection
        scope.toggleTune = {item:-1};
        //
        //Individual string note change functions cause I'm a noob...
        
        scope.noteChangeE = function(){
      		
      		var newNote = this;
      		scope.stringE = this.$index;
      		console.log(newNote);
      		


      		
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
      		scope.stringEe = 7;
      		
      	};
          scope.dTune = function(){
         scope.stringE = 5;
          scope.stringB = 0;
          scope.stringG = 8;
          scope.stringD = 3;
          scope.stringA = 11;
          scope.stringEe = 5;
          
        };
          scope.cTuned = function(){
          scope.stringE = 3;
          scope.stringB = 10;
          scope.stringG = 6;
          scope.stringD = 1;
          scope.stringA = 8;
          scope.stringEe = 3;
          
        };
          scope.bTuned = function(){
          scope.stringE = 2;
          scope.stringB = 11;
          scope.stringG = 5;
          scope.stringD = 0;
          scope.stringA = 7;
          scope.stringEe = 2;
          
        };
      	//Regular Tunings
        scope.fullStep = function(){
      		scope.stringE = 5;
      		scope.stringB = 0;
      		scope.stringG = 8;
      		scope.stringD = 3;
      		scope.stringA = 10;
      		scope.stringEe = 5;
      	};
          scope.minorThird = function(){
          scope.stringE = 6;
          scope.stringB = 3;
          scope.stringG = 0;
          scope.stringD = 9;
          scope.stringA = 6;
          scope.stringEe = 3;
        };
          scope.allFourth = function(){
          scope.stringE = 7;
          scope.stringB = 3;
          scope.stringG = 8;
          scope.stringD = 5;
          scope.stringA = 0;
          scope.stringEe = 8;
        };
          scope.majorSixth = function(){
          scope.stringE = 0;
          scope.stringB = 3;
          scope.stringG = 6;
          scope.stringD = 9;
          scope.stringA = 0;
          scope.stringEe = 3;
        };

        //Open Tunings

        scope.openA = function(){
          scope.stringE = 7;
          scope.stringB = 0;
          scope.stringG = 7;
          scope.stringD = 4;
          scope.stringA = 0;
          scope.stringEe = 7; 
        }
        scope.openB = function(){
          scope.stringE = 6;
          scope.stringB = 2;
          scope.stringG = 9;
          scope.stringD = 2;
          scope.stringA = 9;
          scope.stringEe = 2; 
        }
        scope.openC = function(){
          scope.stringE = 7;
          scope.stringB = 3;
          scope.stringG = 10;
          scope.stringD = 3;
          scope.stringA = 10;
          scope.stringEe = 3; 
        }
      	scope.openD = function(){
      		scope.stringE = 5;
      		scope.stringB = 0;
      		scope.stringG = 9;
      		scope.stringD = 5;
      		scope.stringA = 0;
      		scope.stringEe = 5;
      	};
        //End

        //Weird tuning

        scope.daddad = function(){
          scope.stringE = 5;
          scope.stringB = 0;
          scope.stringG = 5;
          scope.stringD = 5;
          scope.stringA = 0;
          scope.stringEe = 5;
        }

        scope.cello = function(){
          scope.stringE = 7;
          scope.stringB = 2;
          scope.stringG = 0;
          scope.stringD = 5;
          scope.stringA = 11;
          scope.stringEe = 7;
        }

        scope.hotType = function(){
          scope.stringE = 5;
          scope.stringB = 0;
          scope.stringG = 9;
          scope.stringD = 7;
          scope.stringA = 2;
          scope.stringEe = 0;
        }

        scope.augFourth = function(){
          scope.stringE = 9;
          scope.stringB = 3;
          scope.stringG = 9;
          scope.stringD = 3;
          scope.stringA = 9;
          scope.stringEe = 3;
        }

      	//
        
      	//Jquery shit
      		$('.selectedTune').click(function(){
      			$('#selectTune').children().removeClass('highLigh');
      			$(this).addClass('highLigh');
      		})
          /*$('#leftHand').children().hide();

          $('#leftHandSelect').click(function(){
            $('#rightHand').children().hide();
            $('#leftHand').children().slideIn();

          });
          $('#rightHandSelect').click(function(){
            $('#leftHand').hide();
            $('#rightHand').children().slideIn();

          });*/
      	//



      	scope.$watchGroup(['stringE','stringB','stringG','stringD','stringA','stringEe','toggleObjecte'],function(newVal, oldVal){
      		scope.stringE = newVal[0];
      		scope.stringB = newVal[1];
      		scope.stringG = newVal[2];
      		scope.stringD = newVal[3];
      		scope.stringA = newVal[4];
      		scope.stringEe = newVal[5];
      		scope.toggleObjecte = newVal[6];
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
    
      }
    };
  });
