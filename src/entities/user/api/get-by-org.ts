// https://smart-office.uz/services/platon-core/api/v1/persons_by_depart

import axios from "axios";

// model
import { TokenManager } from "../../../shared/model/auth/token-manager";

// types
import type { BaseResponse } from "../../../shared/model/types/response";
import type { GetUsersByOrgResponse } from "../model/types/get-by-org";

export const getByOrg = async () => {
  const response = await axios.get<BaseResponse<GetUsersByOrgResponse>>(
    `https://smart-office.uz/services/platon-core/api/v1/persons_by_depart`,
    {
      headers: {
        Authorization: `Bearer ${TokenManager.getAccessToken()}`,
      },
    }
  );

  return response.data;
};
