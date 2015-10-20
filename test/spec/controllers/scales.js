'use strict';

describe('Controller: ScalesCtrl', function () {

  // load the controller's module
  beforeEach(module('guitarwebApp'));

  var ScalesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScalesCtrl = $controller('ScalesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
