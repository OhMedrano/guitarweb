'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:fretSelection
 * @description
 * # fretSelection
 */
angular.module('guitarwebApp')
  .directive('fretSelection', function () {
    return {
   	  replace:true,
      templateUrl:'templates/fretSelection.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
       
      }
    };
  });
