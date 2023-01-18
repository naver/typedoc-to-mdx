---
title: Config
id: config
slug: /config
sidebar_position: 3
---

Configs can be provided either by command line parameters or config file with JSON format.

## Sample typedoc-to-mdx.json
```json title=typedoc-to-mdx.json
{
  "outDir": "./demo/docs/api",
  "locales": ["ko"],
  "localesDir": "./demo/i18n/{locale}/docusaurus-plugin-content-docs/current/api",
  "typedoc": "./typedoc.json",
  "tsconfig": "./tsconfig.json",
  "baseUrl": "https://github.com/naver/typedoc-to-mdx/"
}
```

## Sample shell script
```sh
typedoc-to-mdx -o "./demo/docs/api" -s "docs" --typedoc "typedoc.json"
```

## Sample shell script (when using the config file)
```sh
typedoc-to-mdx -c typedoc-to-mdx.json
```

## Options
### locales
- type: string[]
- `-l, --locales`

An array of locale strings to enable.
This will separate all descriptions inside jsdoc that starts with `@"TARGET_LOCALE"` and `{@TARGET_LOCALE DESC}` then save them where it specified on the `localesDir`

> JSDoc Example)
```js
/**
 * Class Property A
 * @ko 클래스 프로퍼티 A
 * @type {string}
 * @readonly
 * @example
 * ```ts
 * new DummyClass("b").propA === "b";
 * ```
 */
/**
 * Method A
 * @param {number} a description of param a<ko>패러미터 A의 설명</ko>
 * @param {string} [b="DUMMY_TEXT"] description of param b<ko>패러미터 B의 설명</ko>
 */
```

### outDir
- type: string
- `-o, --outDir`

Path to generate mdx files.

### localesDir
- type: string
- `-d, --localesDir`

Path to generate mdx files with locales applied.
If the locale name should be applied to the path name, you can include the special string `{locale}` then it will automatically transform into the target locale name.

### typedoc
- type: string
- `--typedoc <path>`

Path to the `typedoc.json` file

:::info
See https://typedoc.org/guides/options/ for available options
:::

### tsconfig
- type: string
- `--tsconfig <path>`

Path to the `tsconfig.json` file
