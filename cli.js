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
    ' =>  NAME               LOT',
    '     Sungei Wang Plaza  742',
    '     Plaza Low Yat      590',
    '     Lot 10             582',
    '     Fahrenheit88       187',
    '     Starhill Gallery  1130',
    '     Pavilion           675',
    '     KLCC              3589'
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
    columns: ['name', 'lot'],
    config: {
      lot: { align: 'right' }
    }
  });

  console.log(columns);
});
