'use strict';

var fs = require('fs');
var assert = require('assert');
var nock = require('nock');

var klParkingSpots = require('./');

var mocks = nock('http://dbklpgis.scadatron.net')
  .get('/dbklpgisd1.xml')
  .reply(200, fs.readFileSync('fixtures/dbklpgisd1.xml'));

describe('should format the reponse correctly', function(){
  var spots;
  before(function(done){
    klParkingSpots(function(response){
      spots = response;

      done();
    });
  });

  after(function(){
    mocks.done()
  });

  it('have correct amount of places', function() {
    assert.notEqual(spots, null);
    assert.equal(spots.length, 7);
  });

  it('have correct properties', function() {
    assert.equal(spots[2].name, 'Lot 10');
    assert.equal(spots[6].lot, 3498);
    assert.equal(spots[1].datetime, '31/01/2015 21:45:25');
    assert.equal(spots[3].healthy, true);
    assert.equal(spots[4].type, 'Shopping Mall');
    assert.equal(spots[5].state, 'NA');
    assert.equal(spots[0].id, 'M1');
  });
});
