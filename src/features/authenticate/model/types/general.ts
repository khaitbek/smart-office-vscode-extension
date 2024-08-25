export type PreferredAuthenticationMethod =
  | "Sign in with credentials"
  | "Sign in with token"
  | "Sign in with E-IMZO";

export interface LoginResponse {
  status: string;
  timestamp: number;
  data: {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    refresh_expires_in: number;
    token_type: string;
  };
}
