// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

function insertText(text: string) {
	const editor = vscode.window.activeTextEditor;
	if(editor) {
		const currentPosition = editor.selection.active;
		editor.edit((editBuilder) => {
			editBuilder.insert(currentPosition, text);
		})
	}
}

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "clipdate" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	context.subscriptions.push(
		vscode.commands.registerCommand('clipdate.getDate', () => {
			let today = new Date();
			insertText(today.toDateString());
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('clipdate.getUTCDate', () => {
			let today = new Date();
			insertText(today.toUTCString());
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
