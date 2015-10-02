'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('guitarwebApp')
  .directive('guitarNeck', function ($interpolate) {
    

    return {
      replace:true,
      templateUrl:'templates/guitarNeck.html',  
      restrict: 'EA',
      link: function postLink(scope, element, attrs, interpolate) {

        scope.selectIndex = 0; 

       scope.fretPercent = function($index){
       		scope.selectIndex = $index + '%';
       		element.css('width',scope.selectIndex);
       		
       		console.log($index);
       		console.log(scope.selectIndex);
       	
       	
       	
       	
       		

       	
       };
       

      }
    };
  });
