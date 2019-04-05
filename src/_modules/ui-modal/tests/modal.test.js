'use strict';

var Modal = require('../modal');

describe('Modal View', function() {

  beforeEach(function() {
    this.modal = new Modal();
  });

  it('Should run a few assertions', function() {
    expect(this.modal);
  });

});
