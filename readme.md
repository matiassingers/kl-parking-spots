# kl-parking-spots [![Build Status](http://img.shields.io/travis/matiassingers/kl-parking-spots.svg?style=flat-square)](https://travis-ci.org/matiassingers/kl-parking-spots) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/kl-parking-spots.svg?style=flat-square)](https://gemnasium.com/matiassingers/kl-parking-spots)
> available parking spots in Kuala Lumpur

## Install

```sh
$ npm install --save kl-parking-spots
```


## Usage

```js
var klParkingSpots = require('kl-parking-spots');

klParkingSpots(function(spots){
  console.log(spots);
  // => [ { place: 'Sgwang', date: '14/01/2015 11:38:41', spots: '568' }, ...
});
```


## CLI

```sh
$ npm install --global kl-parking-spots
```

```sh
$ kl-parking --help

  Example
    kl-parking-spots
    
 =>  PLACE      SPOTS
     Lot10        468
```


## License

MIT © [Matias Singers](http://mts.io)
