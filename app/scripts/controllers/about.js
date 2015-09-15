'use strict';

/**
 * @ngdoc function
 * @name guitarwebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guitarwebApp
 */
angular.module('guitarwebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
