'use strict';

describe('Directive: stringSelection', function () {

  // load the directive's module
  beforeEach(module('guitarwebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<string-selection></string-selection>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stringSelection directive');
  }));
});
