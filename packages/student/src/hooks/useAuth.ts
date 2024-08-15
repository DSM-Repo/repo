import { useCookie } from "./useCookie";

interface IData {
  accessToken: string;
  refreshToken: string;
  accessExpiredAt: number;
  refreshExpiredAt: number;
}

export const useAuth = () => {
  const { get, set, del } = useCookie();

  const setToken = (data: IData) => {
    set("accessToken", data.accessToken, { path: "/" });
    set("refreshToken", data.refreshToken, { path: "/" });
    set("accessExpires", data.accessExpiredAt.toString(), { path: "/" });
    set("refreshExpires", data.refreshExpiredAt.toString(), { path: "/" });
  };

  const getToken = (name: "access" | "refresh") => {
    const token = get(name + "Token");
    const timeStamp = get(name + "Expires");
    return { token, timeStamp };
  };

  const delToken = () => {
    del("accessToken");
    del("accessExpires");
    del("refreshToken");
    del("refreshExpires");
  };

  return { setToken, getToken, delToken };
};
