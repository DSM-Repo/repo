import axios, { InternalAxiosRequestConfig } from "axios";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
import { refresh } from "./refresh";
export * from "./paths";

const cookie = new Cookies();

export const instance = axios.create({
  baseURL: process.env.VITE_APP_BASE_URL,
  timeout: 5000
});

export const renderInstance = axios.create({
  baseURL: process.env.VITE_APP_RENDER_BASE_URL,
  timeout: 5000
});

const resFunc = (res: InternalAxiosRequestConfig<any>) => {
  const config = refresh().then(() => {
    const access_token = cookie.get("access_token");
    if (access_token) res.headers.Authorization = `Bearer ${access_token}`;
    return res;
  });
  return config;
};

const errFunc = (err: any) => {
  const { response } = err;
  // if (response.status === 401) {
  //   window.location.replace(`https://www.dsm-repo.com`);
  // } else {
  toast.error(
    `오류가 발생했습니다\n(${response.status}: ${response.data.description || response.data})`,
    { className: "whitespace-pre-line" }
  );
  throw new Error(err);
  // }
};

instance.interceptors.request.use(resFunc, (err) => Promise.reject(err));

renderInstance.interceptors.request.use(resFunc, (err) => Promise.reject(err));

instance.interceptors.response.use((res) => res, errFunc);

renderInstance.interceptors.response.use((res) => res, errFunc);
