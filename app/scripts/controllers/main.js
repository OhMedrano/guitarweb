'use strict';

/**
 * @ngdoc function
 * @name guitarwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guitarwebApp
 */
angular.module('guitarwebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.navList = [
    	{
    		'name':'Scales',
    		'url':'scale'
    	},
    	{
    		'name':'Guitar Notes',
    		'url':'gnotes'
    	},
    	{
    		'name':'Harmonic Visualizer',
    		'url':'frets'
    	}
    	

    ];
  });
