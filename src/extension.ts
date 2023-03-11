import * as vscode from "vscode";
import textContent from "../assets/testtext.txt";
import shellTemplate from "../assets/testpwsh.ps1";
import { modText, modShellTemp } from "./load_assets";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "poc-shell-temp-in-webpack" is now active!'
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "poc-shell-temp-in-webpack.helloWorld",
      () => {
        vscode.window.showInformationMessage(
          "Hello World from poc_shell_temp_in_webpack!"
        );
      }
    ),
    vscode.commands.registerCommand(
      "poc-shell-temp-in-webpack.loadText",
      () => {
        console.log(textContent);
        vscode.window.showInformationMessage(textContent);
      }
    ),
    vscode.commands.registerCommand(
      "poc-shell-temp-in-webpack.shellTemp",
      () => {
        console.log(shellTemplate);
        vscode.window.showInformationMessage(shellTemplate);
      }
    ),
    vscode.commands.registerCommand("poc-shell-temp-in-webpack.fromMod", () => {
      console.log(modText);
      vscode.window.showInformationMessage(modText);
    }),
    vscode.commands.registerCommand(
      "poc-shell-temp-in-webpack.shellTempFromMod",
      () => {
        console.log(modShellTemp);
        vscode.window.showInformationMessage(modShellTemp);
      }
    )
  );
}

export function deactivate() {}
