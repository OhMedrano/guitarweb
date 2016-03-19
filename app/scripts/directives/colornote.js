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

        scope.$watch('stuff',function(newVal,oldVal){
          scope.stuff = newVal;
          var scaleNotes = angular.fromJson(scope.stuff);

          scope.scaleNote = scaleNotes;

          console.log(angular.fromJson(scope.stuff),scope.scaleNote);
        });


      }
    };
  });
