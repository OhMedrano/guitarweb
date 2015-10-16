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
      replace:true,
      templateUrl: 'templates/fretMove.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      		$('#bottomInnerContentMain').children().hide();
      		$('#fretSelection').fadeIn('fast');


    		$('#bottomTools').click(function(){
    			$('#bottomInnerContentNav').children().removeClass('highLighter');
    			$(this).addClass('highLighter');
    			

    			$('#bottomInnerContentMain').children().hide();
    			$('#fretSelection').fadeIn('slow');

    			

    		});
    		$('#bottomText').click(function(){
    			$('#bottomInnerContentNav').children().removeClass('highLighter');
    			$(this).addClass('highLighter');


    			$('#bottomInnerContentMain').children().hide();
    			$('#explainText').fadeIn('slow').children.hide();
    			$('#explainTextHow').fadeIn('fast');
    		});

    		$('#explainTextTool').click(function(){
    			$('#explainTextContent').children().hide();
    			$('#explainTextHow').fadeIn('slow');

    			$('#explainTextNav').children().removeClass('highLighter');
    			$(this).addClass('highLighter');
    		});

    		$('#explainTextTheorys').click(function(){
    			$('#explainTextContent').children().hide();
    			$('#explainTextTheory').fadeIn('slow');

    			$('#explainTextNav').children().removeClass('highLighter');
    			$(this).addClass('highLighter');
    		});
      }
    };
  });
