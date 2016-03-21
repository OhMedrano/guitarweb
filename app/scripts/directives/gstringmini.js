'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:gstringMini
 * @description
 * # gstringMini
 */
angular.module('guitarwebApp')
  .directive('gstringMini', function () {
    return {
      templateUrl:'templates/guitarStringMini.html',
      scope:{
      	root: '=root',
    		scale: '@scale'
      },
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {
        			scope.musicNotes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
       		console.log(scope.root);
       	 scope.rootValue = scope.root;
       	 scope.note0 = scope.musicNotes[scope.rootValue];
       	 scope.note1 = scope.musicNotes[(scope.rootValue + 1) % 12];
       	 scope.note2 = scope.musicNotes[(scope.rootValue + 2) % 12];
       	 scope.note3 = scope.musicNotes[(scope.rootValue + 3) % 12];
       	 scope.note4 = scope.musicNotes[(scope.rootValue + 4 )% 12];
       	 scope.note5 = scope.musicNotes[(scope.rootValue + 5) % 12];
       	 scope.note6 = scope.musicNotes[(scope.rootValue + 6) % 12];
       	 scope.note7 = scope.musicNotes[(scope.rootValue + 7) % 12];
       	 scope.note8 = scope.musicNotes[(scope.rootValue + 8) % 12];
       	 scope.note9 = scope.musicNotes[(scope.rootValue + 9) % 12];
       	 scope.note10 = scope.musicNotes[(scope.rootValue + 10) % 12];
       	 scope.note11 = scope.musicNotes[(scope.rootValue + 11) % 12];

       	  scope.notes0 = scope.rootValue;
       	 scope.notes1 = (scope.rootValue + 1) % 12;
       	 scope.notes2 = (scope.rootValue + 2) % 12;
       	 scope.notes3 = (scope.rootValue + 3) % 12;
       	 scope.notes4 = (scope.rootValue + 4 )% 12;
       	 scope.notes5 = (scope.rootValue + 5) % 12;
       	 scope.notes6 = (scope.rootValue + 6) % 12;
       	 scope.notes7 = (scope.rootValue + 7) % 12;
       	 scope.notes8 = (scope.rootValue + 8) % 12;
       	 scope.notes9 = (scope.rootValue + 9) % 12;
       	 scope.notes10 = (scope.rootValue + 10) % 12;
       	 scope.notes11 = (scope.rootValue + 11) % 12;

       	 console.log('scope.notes0 is ' + scope.notes0);

       	 scope.notes = [scope.note0,scope.note1,scope.note2,scope.note3,scope.note4,scope.note5,scope.note6,scope.note7,scope.note8,scope.note9,scope.note10,scope.note11];
       	 scope.scaled = [];

       	 console.log(scope.notes);
       	 







       	 scope.$watch('scale',function(newVal,oldVal){
       	 	scope.scaled = [];
       	 	scope.scaled = angular.fromJson(newVal);

       	 	
/*	
       	 	scope.scales = attrs.scale.split(',');
       	 	
       	 	scope.scaless = attrs.scale.replace(/[\])}[{(]/g, '');

       	 	scope.scalesss = scope.scaless.split(',');

       	 	scope.scaled = scope.scalesss;*/


       	 	

      		console.log(angular.fromJson(scope.scale),scope.scaledd);





       	 	
/*
       	 	console.log(scope.scaled,scaledd ,scope.scalesss[6]);
       		return scope.scaled;*/
       	 });
       	 



       	
      	scope.$watch('root',function(newVal, oldVal){
      		scope.root = newVal;
      		scope.rootValue = scope.root;



      		//..I really gotta refractor this	
      		
      		scope.note0 = scope.musicNotes[scope.rootValue];
       	 scope.note1 = scope.musicNotes[(scope.rootValue + 1) % 12];
       	 scope.note2 = scope.musicNotes[(scope.rootValue + 2) % 12];
       	 scope.note3 = scope.musicNotes[(scope.rootValue + 3) % 12];
       	 scope.note4 = scope.musicNotes[(scope.rootValue + 4 )% 12];
       	 scope.note5 = scope.musicNotes[(scope.rootValue + 5) % 12];
       	 scope.note6 = scope.musicNotes[(scope.rootValue + 6) % 12];
       	 scope.note7 = scope.musicNotes[(scope.rootValue + 7) % 12];
       	 scope.note8 = scope.musicNotes[(scope.rootValue + 8) % 12];
       	 scope.note9 = scope.musicNotes[(scope.rootValue + 9) % 12];
       	 scope.note10 = scope.musicNotes[(scope.rootValue + 10) % 12];
       	 scope.note11 = scope.musicNotes[(scope.rootValue + 11) % 12];


       	 scope.notes0 = scope.rootValue;
       	 scope.notes1 = (scope.rootValue + 1) % 12;
       	 scope.notes2 = (scope.rootValue + 2) % 12;
       	 scope.notes3 = (scope.rootValue + 3) % 12;
       	 scope.notes4 = (scope.rootValue + 4 )% 12;
       	 scope.notes5 = (scope.rootValue + 5) % 12;
       	 scope.notes6 = (scope.rootValue + 6) % 12;
       	 scope.notes7 = (scope.rootValue + 7) % 12;
       	 scope.notes8 = (scope.rootValue + 8) % 12;
       	 scope.notes9 = (scope.rootValue + 9) % 12;
       	 scope.notes10 = (scope.rootValue + 10) % 12;
       	 scope.notes11 = (scope.rootValue + 11) % 12;


      		console.log(scope.musicNotes[newVal], scope.musicNotes[oldVal]);
      		return scope.root;
      	})


      }
    };
  });
