'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:colorNote
 * @description
 * # colorNote
 */
angular.module('guitarwebApp')
  .directive('colorNote', function () {
    return {
     	scope:{
     		stuff:"=stuff",
        note: '@note'
     	},
      restrict: 'AEC',
      link: function postLink(scope, element, attrs) {
        element.css('border','1px none');
        console.log('the fuck');
        scope.musicNotes = ["A","A#/Bb","B","C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab"];
        
        scope.flatten = function(note){
          for(var x=0;x<=scope.musicNotes.length-1;x++){
            if(note==1){
             return element.text(""+scope.musicNotes[x+1]+"b");
            }
          };
        };

        scope.not = scope.note;

        console.log('this is note ' + scope.not);

        scope.coloredNote = function(selectedNote, selectedScale){
          element.css('background-color','white');
          element.css('color','black');

          for(var x=0;x<=selectedScale.length-1;x++){
            if(selectedNote == selectedScale[0]){
              element.css('background-color','red');
              element.css('color','white');
            }
            
            else if(selectedNote == selectedScale[4]){
              element.css('background-color','black');
              element.css('color','white');
            }

            else if(selectedNote == selectedScale[x]){
              element.css('background-color','black');
              element.css('color','white');
            }
            
          }
        };

        scope.$watchGroup(['stuff','note'],function(newVal,oldVal){
          scope.scaleNote = [];
          scope.stuff = newVal[0];
          scope.note = newVal[1];
          var scaleNotes = angular.fromJson(scope.stuff);

          scope.scaleNote = scaleNotes;
          scope.not = scope.note;

          scope.coloredNote(scope.not, scope.scaleNote);
          

          console.log('This note is ' + scope.not);
          console.log(angular.fromJson(scope.stuff),scope.scaleNote);
        });
        

      }
    };
  });
