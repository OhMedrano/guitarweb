'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:explain
 * @description
 * # explain
 */
angular.module('guitarwebApp')
  .directive('explainText', function () {
    return {
      templateUrl: 'templates/explainText.html',
      replace:true,
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
