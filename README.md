# ESLint Configuration
SlimIO [ESLint](https://eslint.org/) configuration

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

> Dont forget to install **ESLint as a DevDependencies**: `npm i eslint -D`
