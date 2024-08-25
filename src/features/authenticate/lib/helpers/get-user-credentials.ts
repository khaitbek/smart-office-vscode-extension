import * as vscode from "vscode";

export const getUserCredentials = async () => {
  const username = await vscode.window.showInputBox({
    prompt: "Enter your username",
    placeHolder: "johndoe",
    validateInput(value) {
      if (value.length <= 3) {
        return {
          message: "Username must be at least 4 characters",
          severity: 3,
        };
      }
    },
  });

  const password = await vscode.window.showInputBox({
    prompt: "Enter your password",
    placeHolder: "password",
    password: true,
    validateInput(value) {
      if (value.length < 8) {
        return {
          message: "Password must be at least 8 characters",
          severity: 3,
        };
      }
    },
  });

  return { username, password };
};
