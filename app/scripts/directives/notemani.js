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
    scope:'=',
      templateUrl:'templates/noteMani.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      var x = document.getElementById('note');

      console.log(x);

      }	
    };
  });
