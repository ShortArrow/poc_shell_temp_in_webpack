"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const testtext_txt_1 = require("../assets/testtext.txt");
const load_assets_1 = require("./load_assets");
function activate(context) {
    console.log('Congratulations, your extension "poc-shell-temp-in-webpack" is now active!');
    let disposable0 = vscode.commands.registerCommand('poc-shell-temp-in-webpack.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from poc_shell_temp_in_webpack!');
    });
    let disposable1 = vscode.commands.registerCommand('poc-shell-temp-in-webpack.loadText', () => {
        console.log(testtext_txt_1.default);
        vscode.window.showInformationMessage(testtext_txt_1.default);
    });
    let disposable2 = vscode.commands.registerCommand('poc-shell-temp-in-webpack.fromMod', () => {
        console.log(load_assets_1.default);
        vscode.window.showInformationMessage(load_assets_1.default);
    });
    context.subscriptions.push(disposable0, disposable1, disposable2);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map