# poc-shell-temp-in-webpack

This is PoC of develop vscode extension.

## Features

This is a minimal configuration to confirm that a text file can be imported as a literal string in TypeScript.

- Commands
  - `> PoC Shell Temp: Hello World`
  - `> PoC Shell Temp: Load text`
  - `> PoC Shell Temp: Load from mod`
  
## Main Issue

Commands of this extension has fail. 
Because, these are get undefined by import syntax.
`asset/source` has not my expected behavior.
After verification. I was reach these idea.

### Point

This is a part of auto genarated `dist/extension.js`.
Using `testtext_txt_1.default`, but default has undefined.

```js
/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = "Hello text data raw binding to literal\r\n";

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const testtext_txt_1 = __webpack_require__(2);
exports["default"] = testtext_txt_1.default
```

This `dist/extension.js` generation and have not `default` is expected behavior?
I think better as like as bellow.
Or, my `webpack.config.js` or `tsconfig.json` are mistaking?

### Actual

```js
module.exports = "Hello text data raw binding to literal\r\n";
```

### Expect

```js
module.exports.default = "Hello text data raw binding to literal\r\n";
// or module.exports = { default: "Hello text data raw binding to literal\r\n"};
```
      
## Requirements

- vscode
- tsc
- yarn

## Extension Settings

nothing

## Known Issues

test has fail

## Release Notes

nothing
---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

**Enjoy!**
