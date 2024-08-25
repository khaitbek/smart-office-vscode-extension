// https://smart-office.uz/services/platon-core/api/v3/projects?mode=3&current_page=0&project_name=null

// model
import axios from "axios";
import { TokenManager } from "../../../shared/model/auth/token-manager";

// types
import type { BaseResponse } from "../../../shared/model/types/response";
import type { GetProjectsByUserResponse } from "../model/types/get-by-user";

export const getProjectsByUser = async () => {
  const token = TokenManager.getAccessToken();

  const response = await axios.get<BaseResponse<GetProjectsByUserResponse>>(
    `https://smart-office.uz/services/platon-core/api/v3/projects?mode=3&current_page=0&project_name=null`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
