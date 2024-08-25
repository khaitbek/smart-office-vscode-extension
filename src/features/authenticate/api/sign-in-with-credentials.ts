import os from "os";

// api
import { AxiosResponse } from "axios";
import { instance } from "../../../shared/api/instance";

// types
import type { LoginResponse } from "../model/types/general";

export const signInWithCredentials = async (
  username: string | undefined,
  password: string | undefined
) => {
  try {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const loginResponse = (
      await instance.post<unknown, AxiosResponse<LoginResponse>>(
        "/services/platon-auth/api/login",
        formData,
        {
          headers: {
            "device-id": os.hostname(),
          },
        }
      )
    ).data;

    return {
      message: "You have successfully logged in.",
      response: loginResponse.data,
      success: true,
    };
  } catch (error) {
    return {
      message: "There was an error logging in.",
      success: false,
    };
  }
};
