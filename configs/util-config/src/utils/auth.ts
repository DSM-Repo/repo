import Cookies from "js-cookie";
import { isDevelopment } from "../utils";

const option = {
  path: "/",
  domain: isDevelopment ? "" : "dsm-repo.com",
  secure: !isDevelopment,
  sameSite: "strict" as const
};

const { get, set, remove } = Cookies;

interface IData {
  access_token: string;
  refresh_token: string;
  access_expired_at: number;
  refresh_expired_at: number;
  role: "student" | "teacher";
}

export const auth = {
  setToken: (data: IData) => {
    set("access_token", data.access_token, option);
    set("refresh_token", data.refresh_token, option);
    set("access_expires", data.access_expired_at.toString(), option);
    set("refresh_expires", data.refresh_expired_at.toString(), option);
    set("role", data.role, option);
  },
  getToken: (name: "access" | "refresh") => {
    const token = get(name + "_token");
    const timeStamp = get(name + "_expires");
    return { token, timeStamp };
  },
  getRole: () => get("role") as "student" | "teacher",
  delToken: () => {
    remove("access_token", option);
    remove("access_expires", option);
    remove("refresh_token", option);
    remove("refresh_expires", option);
    remove("role", option);
  }
};
