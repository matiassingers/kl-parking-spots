# kl-parking-spots [![Build Status](http://img.shields.io/travis/matiassingers/kl-parking-spots.svg?style=flat-square)](https://travis-ci.org/matiassingers/kl-parking-spots) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/kl-parking-spots.svg?style=flat-square)](https://gemnasium.com/matiassingers/kl-parking-spots)
> available parking spots in Kuala Lumpur, Malaysia

All data comes from [DBKL PGIS](http://dbklpgis.my/displayphotos.html).


## Install

```sh
$ npm install --save kl-parking-spots
```


## Usage

```js
var klParkingSpots = require('kl-parking-spots');

klParkingSpots(function(spots){
  console.log(spots);
  // => [ { name: 'Sungei Wang Plaza', datetime: '31/01/2015 21:40:02', lot: '742', type: 'Shopping Mall', ...
});
```


## CLI

```sh
$ npm install --global kl-parking-spots
```

```sh
$ kl-parking --help

  Example
    kl-parking
    
  =>  NAME               LOT
      Sungei Wang Plaza  742
      Plaza Low Yat      590
      Lot 10             582
      Fahrenheit88       187
      Starhill Gallery  1130
      Pavilion           675
      KLCC              3589
```


## License

MIT © [Matias Singers](http://mts.io)
