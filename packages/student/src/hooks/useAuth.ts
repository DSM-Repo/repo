import { useCookie } from "./useCookie";

interface IData {
  access_token: string;
  refresh_token: string;
  access_expired_at: number;
  refresh_expired_at: number;
}

export const useAuth = () => {
  const { get, set, del } = useCookie();

  const setToken = (data: IData) => {
    set("access_token", data.access_token, {
      path: "/",
      domain: process.env.NODE_ENV === "development" ? "" : ".dsm-repo.com"
    });
    set("refresh_token", data.refresh_token, {
      path: "/",
      domain: process.env.NODE_ENV === "development" ? "" : ".dsm-repo.com"
    });
    set("access_expires", data.access_expired_at.toString(), {
      path: "/",
      domain: process.env.NODE_ENV === "development" ? "" : ".dsm-repo.com"
    });
    set("refresh_expires", data.refresh_expired_at.toString(), {
      path: "/",
      domain: process.env.NODE_ENV === "development" ? "" : ".dsm-repo.com"
    });
  };

  const getToken = (name: "access" | "refresh") => {
    const token = get(name + "_token");
    const timeStamp = get(name + "_expires");
    return { token, timeStamp };
  };

  const delToken = () => {
    del("access_token");
    del("access_expires");
    del("refresh_token");
    del("refresh_expires");
  };

  return { setToken, getToken, delToken };
};
