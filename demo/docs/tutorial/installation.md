---
title: Installation
id: installation
slug: /installation
sidebar_position: 1
---

# Installing
:::caution
This library is in active development.
APIs are likely to change without considerations of backward compatibility.
:::

:::info
`typepedoc-to-mdx` is designed to work with [Docusaurus v2](https://docusaurus.io/).
You can use it without Docusaurus, but some UI may not display correctly.
:::

## Installation
You can install `typedoc-to-mdx` as [npm](https://www.npmjs.com/) module.

```sh
npm i -D typedoc-to-mdx
```

## Running CLI commands
This will install `typedoc-to-mdx` in your node_modules binary, so you can execute it like:

```sh
npx typedoc-to-mdx -c config.json
```

Or, you can execute it within "scripts" section in package.json

```json
"scripts": {
  "docs": "typedoc-to-mdx -c config.json"
}
```

```sh
npm run docs
```
