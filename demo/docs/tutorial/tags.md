---
title: Additional Tags
sidebar_position: 4
---

`typedoc-to-mdx` supports these additional tags.

### @version (=@since)
`@version` or `@since` will add **"Since vX.X.X"** supported version info on your API document.
Adding this to class/interface/etc typedoc will show which versions this class/.. is supported.

```js
/**
 * @since 1.0.0
 */
class DummyClass
```

And, adding this to member will show which versions this member is supported.

```js
class DummyClass {
    /**
     * This prop is added in version 1.1.0
     * @since 1.1.0
     */
    public propA: string;

    /**
     * This method is added in version 1.2.0
     * @since 1.2.0
     */
    public methodA(a: number) {

    }
}
```

### @category and @group
Both are tags supported by TypeDoc.
Normally, API documents are saved in `TYPE_OF_ITEM/ITEM_NAME.mdx`.
For example, if there's `class A` with no category and group, its document will be saved as `Class/A.mdx`.
`@category` and `@group` can change this behavior.
When used, the API document is saved with these rules:

- None of these are used:
    - `TYPE_OF_ITEM/ITEM_NAME.mdx`
- Only `@group` is used:
    - `group_val/ITEM_NAME.mdx`
- Only `@category` is used:
    - `category_val/TYPE_OF_ITEM/ITEM_NAME.mdx`
- Both `@category` and `@group` are used:
    - `category_val/group_val/ITEM_NAME.mdx`

### @copy
Copy all comment / tags from other document.
```js
/**
 * DESC_OF_A
 * @ko 한국어_설명
 * @example
 * ```js
 * const a = new A();
 * ```
 */
class A {
    /**
     * DESC_OF_METHOD_A
     * @see SOMETHING
     * @returns whatever
     */
    methodA() {

    }
}
```

```js
// This will copy all documents of A
/**
 * @copy A
 */
class B {
    // This will copy all documents of methodA of A
    /**
     * @copy A#methodA
     */
    methodB() {

    }
}
```

### @docid
Change the file name of the document.
As Docusaurus doesn't allow case-sensitive names for documents, this can be used to create different permalink of the document.

For example, if there're two global functions with similar names like this:

```ts
/**
 * Some global function
 */
function SomeGlobalFunction(a: number = 10, b = { foo: 123, bar: 456 }) {
    return `I'm global, ${a} ${b}`;
}

/**
 * some global function
 */
function someGlobalFunction(a: number = 10, b = { foo: 123, bar: 456 }) {
    return `I'm global, ${a} ${b}`;
}
```

They will be normally saved as:
- Function/SomeGlobalFunction.mdx
- Function/someGlobalFunction-1.mdx

But, the suffix we put (`-1`) is not permanent. It's just used for distinguish between documents.

Instead, you can use `@docid` for creating different file name for the document.

```ts
/**
 * some global function
 * @docid sgf
 */
function someGlobalFunction(a: number = 10, b = { foo: 123, bar: 456 }) {
    return `I'm global, ${a} ${b}`;
}
```

The document of the above function will be saved as `Function/sgf.mdx`.
