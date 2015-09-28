'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:fretMove
 * @description
 * # fretMove
 */
angular.module('guitarwebApp')
  .directive('fretMove', function () {
    return {
      templateUrl: 'templates/fretMove.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        var image = $('#guitarImage');
        $(image).css('border-color','red');
        var fretStart = $('#fretNum').scope(i);
        console.log(fretStart);
        $('#fretSelector ul li').click(function(){
        	$('#fretHarmm').css('background-color','green');

        });
      }
    };
  });
