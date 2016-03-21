'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:highLight
 * @description
 * # highLight
 */
angular.module('guitarwebApp')
  .directive('highLight', function () {
    return {
      
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
         element.removeClass('highLigh');

     
         
      }
    };
  });
