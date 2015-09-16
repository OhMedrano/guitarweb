'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:fretMove
 * @description
 * # fretMove
 */
angular.module('guitarwebApp')
  .directive('fretMove', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        element.css('background-color','green');
      }
    };
  });
