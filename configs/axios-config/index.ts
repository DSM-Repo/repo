import axios, { AxiosError } from "axios";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const instance = axios.create({
  baseURL: process.env.VITE_APP_BASE_URL,
  timeout: 5000,
});

export const path = {
  auth: "/auth/",
  document: "/document/",
  user: "/user/",
  feedback: "/feedback/",
  major: "/major/",
};

instance.interceptors.request.use(
  (res) => {
    const accessToken = cookie.get("accessToken");
    if (accessToken) {
      res.headers.Authorization = `Bearer ${accessToken}`;
    }
    return res;
  },
  (err: AxiosError) => Promise.reject(err),
);

instance.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      const refreshToken = cookie.get("refreshToken");
      axios
        .post(`${process.env.VITE_APP_BASE_URL}/refresh`, { refreshToken })
        .then((res) => {
          cookie.set("accessToken", res.data.accessToken, {
            secure: true,
            sameSite: "none",
            expires: res.data.accessExpiredat,
          });
          cookie.set("refreshToken", res.data.refreshToken, {
            secure: true,
            sameSite: "none",
            expires: res.data.refreshExpiredat,
          });
        })
        .catch(() => {
          cookie.remove("accessToken");
          cookie.remove("refreshToken");
          window.location.replace(`${process.env.VITE_APP_URL_MAIN}`);
        });
    } else if (err.response?.status === 403) {
      window.location.replace(`${process.env.VITE_APP_URL_MAIN}`);
    }
    return err;
  },
);
