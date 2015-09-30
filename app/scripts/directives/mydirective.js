'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('guitarwebApp')
  .directive('myDirective', function () {
    return {
      
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        scope.selectIndex = 0; 

       scope.fretPercent = function($index){
       	console.log($index);
       	scope.selectIndex = $index;
       	console.log(scope.selectIndex);
       	

       	element.css('width',$index+'%');
       	
       	return $index;

       	
       };

      }
    };
  });
