import { getByOrg } from "../../../../entities/user";

export const getOptions = async () => {
  const usersByOrg = await getByOrg();
  return {
    usersByOrg,
  };
};
