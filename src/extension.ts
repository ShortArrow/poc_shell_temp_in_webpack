import * as vscode from 'vscode';
import testtext from 'raw-loader!../assets/testtext.txt';
import shelltemp from 'raw-loader!../assets/testpwsh.ps1';

export function activate(context: vscode.ExtensionContext) {

  console.log('Congratulations, your extension "poc-shell-temp-in-webpack" is now active!');

  let disposable0 = vscode.commands.registerCommand('poc-shell-temp-in-webpack.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from poc_shell_temp_in_webpack!');
  });

  let disposable1 = vscode.commands.registerCommand('poc-shell-temp-in-webpack.loadText', () => {
    console.log(testtext);
    vscode.window.showInformationMessage(testtext);
  });

  let disposable2 = vscode.commands.registerCommand('poc-shell-temp-in-webpack.loadShell', () => {
    console.log(shelltemp);
    vscode.window.showInformationMessage(shelltemp);
  });

  context.subscriptions.push(disposable0,disposable1,disposable2);
}

export function deactivate() { }
