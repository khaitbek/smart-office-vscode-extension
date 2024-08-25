import * as vscode from "vscode";

const ACCESS_TOKEN_KEY = "smartOfficeAccessToken";
const REFRESH_TOKEN_KEY = "smartOfficeRefreshToken";

export class TokenManager {
  static globalState: vscode.Memento;

  static setToken(accessToken: string, refreshToken?: string) {
    TokenManager.globalState.update(ACCESS_TOKEN_KEY, accessToken);
    if (refreshToken) {
      TokenManager.globalState.update(REFRESH_TOKEN_KEY, refreshToken);
    }
  }

  static getAccessToken(): string | undefined {
    return TokenManager.globalState.get(ACCESS_TOKEN_KEY);
  }

  static getRefreshToken(): string | undefined {
    return TokenManager.globalState.get(REFRESH_TOKEN_KEY);
  }

  static getTokens() {
    return {
      accessToken: TokenManager.getAccessToken(),
      refreshToken: TokenManager.getRefreshToken(),
    };
  }

  static clearTokens() {
    TokenManager.globalState.update(ACCESS_TOKEN_KEY, undefined);
    TokenManager.globalState.update(REFRESH_TOKEN_KEY, undefined);
  }
}
