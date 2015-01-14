'use strict';

var _ = require('lodash');
var got = require('got');
var titleCase = require('title-case');

module.exports = function(callback){
  got('http://dbklpgis.my/PGIS_Mall.js', function(err, data){
    // Remove useless info from the response
    var parkingSpots = data
      .replace(/;|\'|PGIS_/g, '')
      .trim()
      .split('\r\n');

    // LoDash ugly chaining code
    parkingSpots = _(parkingSpots)
      .map(function(spot){
        return spot
          .split('=');
      })
      .zipObject()
      .groupBy(function(value, key){
        return key.split('_')[0];
      })
      .map(function(values, key){
        return {
          place: titleCase(key),
          date: values[0],
          spots: values[1]
        };
      })
      .value();

    callback(parkingSpots);
  });
};
