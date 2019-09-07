# ESLint Configuration
![version](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/SlimIO/eslint-config/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/SlimIO/Eslint-config/commit-activity)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/SlimIO/Eslint-config/blob/master/LICENSE)
![size](https://img.shields.io/bundlephobia/min/@slimio/eslint-config.svg?style=flat)
![dep](https://img.shields.io/david/SlimIO/eslint-config.svg)
[![Known Vulnerabilities](https://snyk.io//test/github/SlimIO/Eslint-config/badge.svg?targetFile=package.json)](https://snyk.io//test/github/SlimIO/Eslint-config?targetFile=package.json)
[![Build Status](https://travis-ci.com/SlimIO/Eslint-config.svg?branch=master)](https://travis-ci.com/SlimIO/Eslint-config)
[![Greenkeeper badge](https://badges.greenkeeper.io/SlimIO/Eslint-config.svg)](https://greenkeeper.io/)

SlimIO [ESLint](https://eslint.org/) configuration

## Requirements
- [Node.js](https://nodejs.org/en/) v10 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @slimio/eslint-config -D
# or
$ yarn add @slimio/eslint-config -D
```

## Usage example

Create an `.eslintrc` file at the root of your project with the following (JSON) content:
```json
{
    "extends": "@slimio/eslint-config"
}
```

Edit the file as you want by adding [custom rules](https://eslint.org/docs/rules/) if required !

## Why ?

| rule name | value | why we choose this configuration |
| --- | --- | --- |
| indent | 4 | We are considering indent `2` not enougth for code visibility/readability |
| semi | always | We are following the official TC39 ASI recommandation |

## Dependencies

This project have no dependencies.

## License
MIT
