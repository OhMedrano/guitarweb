'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:fretMoveSmall
 * @description
 * # fretMoveSmall
 */
angular.module('guitarwebApp')
  .directive('fretMoves', function () {
    return {
      templateUrl: 'templates/fretMoveSmall.html',
      replace:true,
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
