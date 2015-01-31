'use strict';

var _ = require('lodash');
var got = require('got');
var parseString = require('xml2js').parseString;
var titleCase = require('title-case');

var test = module.exports = function(callback){
  got('http://dbklpgis.scadatron.net/dbklpgisd1.xml', function(err, data){
    if(err){
      throw err;
    }

    parseString(data, function(err, data){
      if(err){
        throw err;
      }

      var parkingSpots = _.map(data.PGIS.MALL, function(object){
        return _.transform(object, function (result, val, key) {
          key = key.toLowerCase();
          val = val[0];

          if(key === 'lot'){
            // Sometimes the returned value is "OPEN", not sure why
            val = val === 'OPEN' ? val : parseInt(val, 10);
          }

          if(key === 'healthy'){
            // Parse the healthy property to a boolean
            val = (val === "1");
          }

          if(key === 'name'){
            val = val === 'KLCC' ? val : titleCase(val);
          }

          result[key] = val;
        });
      });

      callback(parkingSpots);
    })
  });
};
