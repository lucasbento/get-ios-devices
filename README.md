<h1 align="center">get-ios-devices</h1>
<p align="center">
  Get a list of iOS devices and simulators.
</p>

<p align="center">
  <a href="https://travis-ci.org/lucasbento/get-ios-devices"><img src="https://travis-ci.org/lucasbento/get-ios-devices.svg?branch=master"></a>
  <a href="https://github.com/lucasbento/get-ios-devices/issues"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"></a>
</p>

## Install

```sh
yarn add get-ios-devices
```

## Usage

```js
const iOSDevices = require('get-ios-devices');

const devices = iOSDevices();
/*
 devices = [
    {
      availability: 'available',
      state: 'Booted',
      isAvailable: true,
      name: 'iPhone X',
      udid: 'FA43D7DC-91C7-4707-8208-485D94C1FD0C',
      availabilityError: '',
      version: '12.1'
    }
  ]
*/
```

## License

MIT © [Lucas Bento](https://github.com/lucasbento)
