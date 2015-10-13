'use strict';

describe('Directive: colorPegs', function () {

  // load the directive's module
  beforeEach(module('guitarwebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<color-pegs></color-pegs>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the colorPegs directive');
  }));
});
