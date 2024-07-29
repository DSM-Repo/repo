import { instance, path } from "@configs/axios";

export const getMajor = async () => {
  const { data } = await instance.get(path.major);
};
