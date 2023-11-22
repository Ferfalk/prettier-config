# @ferfalk/prettier-config

<!-- [![Publish](https://github.com/Ferfalk/prettier-config/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Ferfalk/prettier-config/actions/workflows/npm-publish.yml) -->

[![Publish](https://img.shields.io/github/actions/workflow/status/Ferfalk/prettier-config/npm-publish.yml?label=publish)](https://github.com/Ferfalk/prettier-config/actions/workflows/npm-publish.yml)
[![NPM Version](https://img.shields.io/npm/v/prettier-config.svg)](https://www.npmjs.com/package/prettier-config)
[![NPM Downloads](https://img.shields.io/npm/dt/prettier-config.svg)](https://www.npmjs.com/package/prettier-config)
[![Github Repo Size](https://img.shields.io/github/repo-size/Ferfalk/prettier-config.svg)](https://github.com/Ferfalk/prettier-config)
[![LICENSE](https://img.shields.io/npm/l/prettier-config.svg)](https://github.com/Ferfalk/prettier-config/blob/main/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/Ferfalk/prettier-config.svg)](https://github.com/Ferfalk/prettier-config/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/Ferfalk/prettier-config.svg)](https://github.com/Ferfalk/prettier-config/commits/main)

Shared [Prettier](https://github.com/prettier/prettier) configuration.

## Installation

```bash
npm install --save-dev @ferfalk/prettier-config
```

## Usage

Add the **prettier** property on **package.json**:

```json
{
  "prettier": "@ferfalk/prettier-config"
}
```

### Or

Create a **.prettierrc** file with a string:

```
"@ferfalk/prettier-config"
```

### Or

To extend the configuration, create a **.prettierrc.js** file:

```js
import config from '@ferfalk/prettier-config';

export default {
  ...config,
  singleQuote: false,
};
```

## License

[MIT](https://github.com/Ferfalk/prettier-config/blob/main/LICENSE)
