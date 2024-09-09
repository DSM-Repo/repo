import { Cookies } from "react-cookie";
import { isDevelopment } from "../utils";

interface IData {
  access_token: string;
  refresh_token: string;
  access_expired_at: number;
  refresh_expired_at: number;
  role: "student" | "teacher";
}

const cookie = new Cookies();

const option = {
  path: "/",
  domain: isDevelopment ? "" : "dsm-repo.com"
};

export const useAuth = () => {
  const setToken = (data: IData) => {
    cookie.set("access_token", data.access_token, option);
    cookie.set("refresh_token", data.refresh_token, option);
    cookie.set("access_expires", data.access_expired_at, option);
    cookie.set("refresh_expires", data.refresh_expired_at, option);
    cookie.set("role", data.role, option);
  };

  const getToken = (name: "access" | "refresh") => {
    const token = cookie.get(name + "_token");
    const timeStamp = cookie.get(name + "_expires");
    return { token, timeStamp };
  };

  const getRole = () => {
    return cookie.get("role");
  };

  const delToken = () => {
    cookie.remove("access_token", option);
    cookie.remove("access_expires", option);
    cookie.remove("refresh_token", option);
    cookie.remove("refresh_expires", option);
    cookie.remove("role", option);
  };

  return { setToken, getToken, delToken, getRole };
};
