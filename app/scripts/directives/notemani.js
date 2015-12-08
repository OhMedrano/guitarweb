'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:noteMani
 * @description
 * # noteMani
 */
angular.module('guitarwebApp')
  .directive('noteMani', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the noteMani directive');
      }
    };
  });
