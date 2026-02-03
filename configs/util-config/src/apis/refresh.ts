import Cookies from "js-cookie";
import axios from "axios";
import { isDevelopment } from "../utils";

const cookie = Cookies;

const option = {
  path: "/",
  domain: isDevelopment ? "" : "dsm-repo.com",
  secure: !isDevelopment,
  sameSite: "strict" as const
};

let refreshPromise: Promise<void> | null = null;

const performRefresh = async (): Promise<void> => {
  const refreshToken = cookie.get("refresh_token");
  const res = await axios.put(
    `${process.env.VITE_APP_BASE_URL}/auth/token`,
    undefined,
    { headers: { "X-refresh-token": refreshToken } }
  );
  cookie.set("access_token", res.data.access_token, option);
  cookie.set("refresh_token", res.data.refresh_token, option);
  cookie.set("access_expires", res.data.access_expired_at, option);
  cookie.set("refresh_expires", res.data.refresh_expired_at, option);
};

export const refresh = async (): Promise<void> => {
  const expireStamp = Number(cookie.get("access_expires"));
  const currentStamp = Math.round(Date.now() / 1000);

  if (expireStamp > currentStamp) {
    return;
  }

  if (refreshPromise) {
    return refreshPromise;
  }

  refreshPromise = performRefresh().finally(() => {
    refreshPromise = null;
  });

  return refreshPromise;
};
