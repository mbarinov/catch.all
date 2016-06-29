# catch.all

[![travis build](https://img.shields.io/travis/mbarinov/catch.all.svg?style=flat-square)](https://travis-ci.org/mbarinov/catch.all)
[![codecov coverage](https://img.shields.io/codecov/c/github/mbarinov/catch.all.svg?style=flat-square)](https://codecov.io/github/mbarinov/catch.all)
[![version](https://img.shields.io/npm/v/catch.all.svg?style=flat-square)](http://npm.im/catch.all)
[![downloads](https://img.shields.io/npm/dm/catch.all.svg?style=flat-square)](http://npm-stat.com/charts.html?package=catch.all&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/catch.all.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

[JS playground](https://tonicdev.com/5773dc8844e49613004016d4/5773dc8844e49613004016d5)

Get all errors from an array of promises.

## Installation

This package is distributed via npm:

```
npm install catch.all
```

## Usage

```javascript
import catchAll from 'catch.all';

const promises = [
    Promise.reject('error1'),
    Promise.reject('error2')
]

catchAll(promises).then(errors => {
    console.log(errors)
    // ['error1','error2']
    return errors
})

const badArg = {};

catchAll(badArg)
.catch(e => {
    console.log(e.message)
    // "promises[Symbol.iterator] is not a function"
});

```

## Other

This library was developed by [Max Barinov](https://maxbarinov.com).
