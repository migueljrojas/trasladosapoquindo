'use strict';

var Clients = require('../clients');

describe('Clients View', function() {

  beforeEach(function() {
    this.clients = new Clients();
  });

  it('Should run a few assertions', function() {
    expect(this.clients);
  });

});
