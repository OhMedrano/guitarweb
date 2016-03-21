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
         

         element.on('click',function(event){
        	element.toggleClass('highLigh');
        	

        });


        element.on('mouseover',function(event){
        	event.preventDefault();
        	 element.removeClass('highLigh');

        	element.addClass('highLigh');

        });
         element.on('mouseleave',function(event){
        	event.preventDefault();
        	element.removeClass('highLigh');

        });
         
      }
    };
  });
