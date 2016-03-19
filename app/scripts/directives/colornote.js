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
     		stuff:"@stuff"
     	},
      restrict: 'AEC',
      link: function postLink(scope, element, attrs) {
        console.log(scope.stuff);
        console.log('the fuck');


        scope.$watch('stuff',function(newVal,oldVal){
          scope.stuff = newVal;
          console.log(scope.stuff.length);
        })
      }
    };
  });
