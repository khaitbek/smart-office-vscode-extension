import * as vscode from "vscode";

// api
import { signInWithCredentials } from "./sign-in-with-credentials";

// model
import { TokenManager } from "../../../shared/model/auth/token-manager";

// helpers
import { getPreferredMethod } from "../lib/helpers/get-preferred-method";
import { getUserCredentials } from "../lib/helpers/get-user-credentials";

export const authenticate = async () => {
  vscode.window.showInformationMessage("Calling authenticate");
  const preferredSignInMethod = await getPreferredMethod();

  switch (preferredSignInMethod) {
    case "Sign in with credentials":
      const { username, password } = await getUserCredentials();

      const { success, response } = await signInWithCredentials(
        username,
        password
      );

      if (success) {
        vscode.window.showInformationMessage(
          "You have successfully logged in."
        );
        TokenManager.setToken(
          response?.access_token ?? "",
          response?.refresh_token ?? ""
        );
        return true;
      } else {
        vscode.window.showErrorMessage("There was an error logging in.");
        return false;
      }

    default:
      vscode.window.showWarningMessage(
        "We are sorry, we currently do not support this method of sign in."
      );
      return false;
  }
};
