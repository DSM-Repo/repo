import Cookies from "js-cookie";
import axios from "axios";
import { isDevelopment } from "../utils";

const cookie = Cookies;
let lock = false;
const option = {
  path: "/",
  domain: isDevelopment ? "" : "dsm-repo.com"
};

const wait = () => {
  let cnt = 0;
  return new Promise((res, rej) => {
    setInterval(() => {
      const curExpStamp = Number(cookie.get("access_expires"));
      const curCurStamp = Math.round(Date.now() / 1000);
      cnt++;
      if (curExpStamp > curCurStamp) res("Token Changed!");
      if (cnt === 5) rej("Token not changed..");
    }, 1000);
  });
};

export const refresh = () =>
  new Promise((resolve, reject) => {
    const expireStamp = Number(cookie.get("access_expires"));
    const currentStamp = Math.round(Date.now() / 1000);

    if (expireStamp <= currentStamp && !lock) {
      lock = true;
      const refreshToken = cookie.get("refresh_token");
      axios
        .put(`${process.env.VITE_APP_BASE_URL}/auth/token`, undefined, {
          headers: { "X-refresh-token": refreshToken }
        })
        .then((res) => {
          cookie.set("access_token", res.data.access_token, option);
          cookie.set("refresh_token", res.data.refresh_token, option);
          cookie.set("access_expires", res.data.access_expired_at, option);
          cookie.set("refresh_expires", res.data.refresh_expired_at, option);
          lock = false;
          resolve("Successed!");
        })
        .catch((err) => reject(err));
    } else if (lock) {
      wait()
        .then(() => resolve("Successed!"))
        .catch(() => reject("Failed.."));
    } else {
      resolve("Successed");
    }
  });
