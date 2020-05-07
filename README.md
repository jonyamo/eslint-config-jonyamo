# eslint-plugin-jonyamo

> ESLint and Prettier setup

Provides a baseline set of rules for both ESLint and Prettier which can be included and modified per project. Also includes a separate react-specific set of rules.

## Install

These configs depend on a few other packages, so is necessary to also install the peer dependencies.

```sh
$ npx install-peerdeps --dev eslint-config-jonyamo
```

## Usage

Simply extend this config in either `.eslintrc`:

```json
{
    "extends": "jonyamo"
}
```

or `package.json`:

```json
{
    "eslintConfig": {
        "extends": "jonyamo"
    }
}
```

## What's Included

Includes the following "recommended" configurations:

* [`eslint:recommended`](https://eslint.org/docs/user-guide/configuring#using-eslint-recommended) - A subset of core rules that report common problems.
* [`promise:recommended`](https://www.npmjs.com/package/eslint-plugin-promise) - Best practices for JavaScript promises.
* [`unicorn:recommended`](https://www.npmjs.com/package/eslint-plugin-unicorn) - Various rules that enforce good practices.
* [`prettier:recommended`](https://www.npmjs.com/package/eslint-config-prettier) - Allows Prettier to focus on formatting, while ESLint focuses on quality.

## React

* [`react:recommended`](https://www.npmjs.com/package/eslint-plugin-react) - Rules specific to React.
* [`react-hooks:recommended`](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Rules specific to React hooks.

To include the react rules:

```json
{
    "extends": "jonyamo/react"
}
```

Note: the react rules do not extend the base rules, so if you want to include both you must do so explicitly:

```json
{
    "extends": ["jonyamo", "jonyamo/react"]
}
```

### Create React App

For apps built with [`create-react-app`](https://create-react-app.dev), follow [these instructions](https://create-react-app.dev/docs/setting-up-your-editor#experimental-extending-the-eslint-config), which basically state:

1. In `.env` set:

```
EXTEND_ESLINT=true
```

2. In `package.json`:

```json
{
    "eslintConfig": {
        "extends": ["react-app", "jonyamo", "jonyamo/react"]
    }
}
```
