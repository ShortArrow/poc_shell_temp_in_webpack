"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require("vscode");
// import * as myExtension from '../../extension';
const load_assets_1 = require("../../load_assets");
suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');
    test('Sample test', () => {
        assert.strictEqual(-1, [1, 2, 3].indexOf(5));
        assert.strictEqual(-1, [1, 2, 3].indexOf(0));
    });
    test('load text file', () => {
        console.log(load_assets_1.default);
        const expect = "Hello text data raw binding to literal\r\n";
        assert.strictEqual(load_assets_1.default, expect);
    });
});
//# sourceMappingURL=extension.test.js.map