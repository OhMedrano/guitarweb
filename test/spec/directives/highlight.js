'use strict';

describe('Directive: highLight', function () {

  // load the directive's module
  beforeEach(module('guitarwebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<high-light></high-light>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the highLight directive');
  }));
});
