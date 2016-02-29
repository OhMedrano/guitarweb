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
    	scope.selectIndex = 0; 

    	scope.fretMobilePercent = function($index){
    		scope.selectIndex = $index + '%';
    		element.css('height',scope.selectIndex);
    		console.log(scope.selectIndex);
    	};

    	
      }
    };
  });
