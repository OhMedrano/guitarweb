'use strict';

describe('Directive: fretRatioSelector', function () {

  // load the directive's module
  beforeEach(module('guitarwebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fret-ratio-selector></fret-ratio-selector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fretRatioSelector directive');
  }));
});
