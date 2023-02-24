---
sidebar_position: 2
---

`typedoc.json` file is required for setting entrypoints & other options that [TypeDoc](https://typedoc.org) supports.
All available options are defined in the TypeDoc guide.
- https://typedoc.org/guides/options/

Here's a sample `typedoc.json` config we're using in this project.
```json
{
  "entryPoints": ["./dummy-projects/project1/src/index.ts"],
  "sourceLinkTemplate": "https://github.com/naver/typedoc-to-mdx/blob/{gitRevision}/{path}#L{line}",
  "excludePrivate": true,
  "excludeProtected": true
}
```

## Multiple entry points
When there're more than one entry point, `typedoc-to-mdx` will create API documents with each entry point as project.

Suppose there're two projects, with entry points like this:
```json
{
    "entryPoints": [
        "./packages/PROJECT_1/index.ts"
        "./packages/PROJECT_2/index.ts"
    ]
}
```

In the above case, API documents will be generated with the path:
- **OUT_DIR/PROJECT_1/...**
- **OUT_DIR/PROJECT_2/...**

But, if the entry points are defined like this (with the additional `/src`):
```json
{
    "entryPoints": [
        "./packages/PROJECT_1/src/index.ts"
        "./packages/PROJECT_2/src/index.ts"
    ]
}
```

The generated documents will contain the `src` in their path, which you might not want.
- **OUT_DIR/src/PROJECT_1/...**
- **OUT_DIR/src/PROJECT_2/...**

### Use the *@module* tag
To resolve this issue, you can use [@module](https://typedoc.org/tags/module/) tag to redefine the project name.

If the `index.ts` file within the `PROJECT_1` contains a comment like this:

```ts title="./packages/PROJECT_1/src/index.ts"
/**
 * @module alias_of_project_1
 */
```

Then, documents will be generated with the module name you defined:
- **OUT_DIR/alias_of_project_1/...**
- **OUT_DIR/src/PROJECT_2/...**
