'use strict';

var fs = require('fs');
var assert = require('assert');
var nock = require('nock');

var klParkingSpots = require('./');

var mocks = nock('http://dbklpgis.my')
  .get('/PGIS_Mall.js')
  .reply(200, fs.readFileSync('fixtures/PGIS_Mall.js'));

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
  })

  it('have correct amount of places', function() {
    assert.notEqual(spots, null);
    assert.equal(spots.length, 7);
  });

  it('have correct properties', function() {
    assert.equal(spots[2].place, 'Lot10');
    assert.equal(spots[6].spots, '1598');
  });
});
