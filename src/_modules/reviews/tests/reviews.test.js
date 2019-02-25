'use strict';

var Reviews = require('../reviews');

describe('Reviews View', function() {

  beforeEach(function() {
    this.reviews = new Reviews();
  });

  it('Should run a few assertions', function() {
    expect(this.reviews);
  });

});
