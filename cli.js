#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var klParkingSpots = require('./');
var argv = process.argv.slice(2);

var columnify = require('columnify')

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    kl-parking',
    '',
    ' =>  PLACE      SPOTS',
    '     Sgwang       467',
    '     Lowyat       634',
    '     Lot10        461',
    '     Fahrenheit   283',
    '     Starhill    1030',
    '     Pavilion    1207',
    '     Klcc        1526'
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}


klParkingSpots(function(parkingSpots){
  var columns = columnify(parkingSpots, {
    columns: ['place', 'spots'],
    config: {
      spots: { align: 'right' }
    }
  });

  console.log(columns);
});
