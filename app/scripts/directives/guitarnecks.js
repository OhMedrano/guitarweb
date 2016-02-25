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
       var result;
       var collect = [];
        for(var x=0;x<=fretVar[0].values.length;x++){
        	result = fretVar[0].values[x] * 708; 
        	collect.push('The percentage is '+result+' and fret # is ' + x);

        };
        console.log(collect);

      }
    };
  });
