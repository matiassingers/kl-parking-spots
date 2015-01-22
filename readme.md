# kl-parking-spots [![Build Status](http://img.shields.io/travis/matiassingers/kl-parking-spots.svg?style=flat-square)](https://travis-ci.org/matiassingers/kl-parking-spots) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/kl-parking-spots.svg?style=flat-square)](https://gemnasium.com/matiassingers/kl-parking-spots)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/matiassingers/kl-parking-spots?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
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
     Sgwang       467
     Lowyat       634
     Lot10        461
     Fahrenheit   283
     Starhill    1030
     Pavilion    1207
     Klcc        1526
```


## License

MIT © [Matias Singers](http://mts.io)
