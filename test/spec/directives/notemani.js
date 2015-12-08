'use strict';

describe('Directive: noteMani', function () {

  // load the directive's module
  beforeEach(module('guitarwebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<note-mani></note-mani>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the noteMani directive');
  }));
});
