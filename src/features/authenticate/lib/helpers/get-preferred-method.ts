import * as vscode from "vscode";

// types
import type { PreferredAuthenticationMethod } from "../../model/types/general";

export const getPreferredMethod =
  async (): Promise<PreferredAuthenticationMethod> => {
    const preferredSignInMethod = await vscode.window.showQuickPick([
      "Sign in with credentials",
      "Sign in with token",
      "Sign in with E-IMZO",
    ]);

    return preferredSignInMethod as PreferredAuthenticationMethod;
  };
