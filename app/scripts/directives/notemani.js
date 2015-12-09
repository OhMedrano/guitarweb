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
      templateUrl:'templates/noteMani.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
       		 var notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];


			var scale = [0,2,4,5,7,9,11];

			console.log(notes);
			console.log(scale);

			var result = function(notes){
 				 var results = [];
  		
  				 for(var i=0;i<scale.length;i++){
    				results.push(notes[scale[i]]);
  					};
  					console.log(results);
					};

				result(notes);
      }
    };
  });
