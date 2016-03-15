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
        



      }
    };
  });
