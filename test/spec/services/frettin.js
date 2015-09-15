'use strict';

describe('Service: frettin', function () {

  // load the service's module
  beforeEach(module('guitarwebApp'));

  // instantiate service
  var frettin;
  beforeEach(inject(function (_frettin_) {
    frettin = _frettin_;
  }));

  it('should do something', function () {
    expect(!!frettin).toBe(true);
  });

});
