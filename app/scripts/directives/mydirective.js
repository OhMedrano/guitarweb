'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('guitarwebApp')
  .directive('myDirective', function ($interpolate) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var exp = $interpolate(element.html());
        var watchFunc = function(){
        	return exp(scope);

        };
        scope.$watch(watchFunc, function(html){
        	element.html(html);
        });
      }
    };
  });
