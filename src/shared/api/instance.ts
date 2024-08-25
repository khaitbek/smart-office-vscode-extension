import axios from "axios";
import { TokenManager } from "../model/auth/token-manager";

export const instance = axios.create({
  baseURL: "https://smart-office.uz",
});

// @ts-expect-error - This is a hack to get the token from the TokenManager
instance.interceptors.request.use((config) => {
  const token = TokenManager.getToken();
  return {
    ...config,
    headers: token
      ? {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        }
      : {
          ...config.headers,
        },
  };
});
