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


        var stringSelection1 = function($index){
        	scope.stringE = $index;
        	console.log(stringE);




        };


      }
    };
  });
