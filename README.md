# typedoc-to-mdx

TypeDoc to mdx API document generator.

This module is designed for use with [docusaurus v2](https://docusaurus.io/)

>⚠️ This library is in active development.
APIs are likely to change without considerations of backward compatibility.

## Options
- "-c, --config <path>", "path to the config file"
- "-o, --outDir <path>", "path to the generated mdx files"
- "-l, --locales [locales...]", "locales to enable"
- "-d, --localesDir <path>", "path to the locales document"
- "--typedoc <path>", "path to the typedoc.json"
- "--tsconfig <path>", "path to the tsconfig.json"

## Styles
`typedoc-to-mdx` provides styles file dedicated to [docusaurus v2](https://docusaurus.io/).
Here's file paths that `typedoc-to-mdx` provides.

```
- typedoc-to-mdx/sass/theme.sass
- typedoc-to-mdx/css/theme.css
- typedoc-to-mdx/css/theme.min.css
```

You should include one of those files within `presets/"@docusaurus/preset-classic"/theme/customCss` section of your `docusaurus.config.js` file.

```js
presets: [
  [
    "@docusaurus/preset-classic",
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      theme: {
        customCss: [
          require.resolve("typedoc-to-mdx/css/theme.min.css")
        ]
      }
    })
  ]
]
```

## Config example
```json
{
  "outDir": "./demo/docs/api",
  "locales": ["ko"],
  "localesDir": "./demo/i18n/{locale}/docusaurus-plugin-content-docs/current/api",
  "typedoc": "./typedoc.json",
  "tsconfig": "./tsconfig.json"
}
```

## License
```
Copyright (c) 2023-present NAVER Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
