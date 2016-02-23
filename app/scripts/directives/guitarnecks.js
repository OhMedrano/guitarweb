'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:guitarNecks
 * @description
 * # guitarNecks
 */
angular.module('guitarwebApp')
  .directive('guitarNecks', function () {
    return {
      templateUrl: 'templates/guitarNeckMobile.html',
      restrict: 'EA',
      replace:true,
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
