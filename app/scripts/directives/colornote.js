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
        
        console.log('the fuck');
        scope.scaleNote = [];

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
            

            else if(selectedNote == selectedScale[x]){
              element.css('background-color','green');
              element.css('color','white');
            }
            
          }
        };

        scope.$watchGroup(['stuff','note'],function(newVal,oldVal){
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
