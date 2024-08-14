import { Cookies } from "react-cookie";
import axios from "axios";

const cookie = new Cookies();
let lock = false;

const wait = () => {
  let cnt = 0;
  return new Promise((res, rej) => {
    setInterval(() => {
      const curExpStamp = cookie.get("accessExpires");
      const curCurStamp = Math.round(Date.now() / 1000);
      cnt++;
      if (curExpStamp > curCurStamp) res("Token Changed!");
      if (cnt === 5) rej("Token not changed..");
    }, 1000);
  });
};

export const refresh = () =>
  new Promise((resolve, reject) => {
    const expireStamp = cookie.get("accessExpires");
    const currentStamp = Math.round(Date.now() / 1000);

    if (expireStamp <= currentStamp && !lock) {
      lock = true;
      const refreshToken = cookie.get("refreshToken");
      axios
        .put(`${process.env.VITE_APP_BASE_URL}/auth/token`, undefined, {
          headers: { "X-refresh-token": refreshToken }
        })
        .then((res) => {
          cookie.set("accessToken", res.data.accessToken, { path: "/" });
          cookie.set("refreshToken", res.data.refreshToken, { path: "/" });
          cookie.set("accessExpires", res.data.accessExpiredAt, { path: "/" });
          cookie.set("refreshExpires", res.data.refreshExpiredAt, {
            path: "/"
          });
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
