'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:fretsScaling
 * @description
 * # fretsScaling
 */
angular.module('guitarwebApp')
  .directive('fretsScaling', function () {
    return {
      template: '<div>Whats up</div>',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        element.css('background-color','green','border','1px solid black');
      }
  		}
     
  });
