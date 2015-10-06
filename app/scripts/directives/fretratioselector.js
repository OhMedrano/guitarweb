'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:fretRatioSelector
 * @description
 * # fretRatioSelector
 */
angular.module('guitarwebApp')
  .directive('fretRatioselector', function () {
    return {
      templateUrl:'templates/fretRatioSelector.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
