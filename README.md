# @ferfalk/prettier-config

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
