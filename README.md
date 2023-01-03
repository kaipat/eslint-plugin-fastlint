# eslint-plugin-fastlint

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-fastlint`:

```sh
npm install eslint-plugin-fastlint --save-dev
```

## Usage

Add `fastlint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "fastlint"
    ],
    "extends": [
      "plugin:fastlint/recommended"
    ]
}
```


