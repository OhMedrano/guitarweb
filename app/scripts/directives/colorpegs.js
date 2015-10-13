'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:colorPegs
 * @description
 * # colorPegs
 */
angular.module('guitarwebApp')
  .directive('colorPegs', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the colorPegs directive');
      }
    };
  });
