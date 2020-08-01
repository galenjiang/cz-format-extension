# CZ Format Extension

[![version](https://badge.fury.io/js/cz-format-extension.svg?style=flat)](https://badge.fury.io/js/cz-format-extension)
[![deploy](https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat)](https://github.com/algolia/shipjs)
[![LICENSE](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](https://opensource.org/licenses/MIT)

Extensible [Commitizen](https://github.com/commitizen/cz-cli)'s format

This package is extension commit message format when use

## Usage

```
npm install -D commitizen cz-format-extension
```

Make `.czrc` or add `config` fields into package.json

`.czrc`

```json
{
  "path": "cz-format-extension"
}
```

`package.json`

```json
{
  "config": {
  "commitizen": {
    "path": "cz-format-extension"
  }
}
```

## Inspired by

- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
- [cz-conventional-changelog-ja](https://github.com/AquiTCD/cz-conventional-changelog-ja)
