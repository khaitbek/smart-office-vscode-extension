import { TokenManager } from "../../model/auth/token-manager";

export const getToken = () => {
  return TokenManager.getToken();
};
