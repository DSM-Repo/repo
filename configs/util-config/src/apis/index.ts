import axios, { InternalAxiosRequestConfig } from "axios";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
import { refresh } from "./refresh";
import { isDevelopment } from "../utils";
export * from "./paths";

const cookie = new Cookies();
const option = {
  path: "/",
  domain: isDevelopment ? "" : "dsm-repo.com"
};

export const instance = axios.create({
  baseURL: process.env.VITE_APP_BASE_URL,
  timeout: 5000
});

export const renderInstance = axios.create({
  baseURL: process.env.VITE_APP_CONVERT_BASE_URL,
  timeout: 5000
});

const resFunc = (res: InternalAxiosRequestConfig<any>) => {
  const config = refresh().then(() => {
    const access_token = cookie.get("access_token");
    if (access_token && !res.url.includes("/auth"))
      res.headers.Authorization = `Bearer ${access_token}`;
    return res;
  });
  return config;
};

const errFunc = (err: any) => {
  const { response } = err;
  if (response.status === 401) {
    cookie.remove("access_token", option);
    cookie.remove("access_expires", option);
    cookie.remove("refresh_token", option);
    cookie.remove("refresh_expires", option);
    cookie.remove("role", option);
    window.location.replace(process.env.VITE_APP_URL_MAIN);
  } else {
    toast.error(
      `오류가 발생했습니다 (${response.status}: ${response.data.description || response.data})`
    );
    throw new Error(err);
  }
};

instance.interceptors.request.use(resFunc, (err) => Promise.reject(err));

renderInstance.interceptors.request.use(resFunc, (err) => Promise.reject(err));

instance.interceptors.response.use((res) => res, errFunc);

renderInstance.interceptors.response.use((res) => res, errFunc);
