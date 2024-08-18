import { Cookies } from "react-cookie";
import { CookieSetOptions } from "universal-cookie";

const cookie = new Cookies();

export const useCookie = () => {
  const get = (name: string) => cookie.get(name);
  const set = (name: string, data: string, options?: CookieSetOptions) =>
    cookie.set(name, data, options);
  const del = (name: string) => cookie.remove(name);

  return { get, set, del };
};
