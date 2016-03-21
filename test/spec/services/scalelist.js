'use strict';

describe('Service: scaleList', function () {

  // load the service's module
  beforeEach(module('guitarwebApp'));

  // instantiate service
  var scaleList;
  beforeEach(inject(function (_scaleList_) {
    scaleList = _scaleList_;
  }));

  it('should do something', function () {
    expect(!!scaleList).toBe(true);
  });

});
