import { Cookies } from "react-cookie";
import axios from "axios";

const cookie = new Cookies();
let lock = false;

const wait = () => {
  let cnt = 0;
  return new Promise((res, rej) => {
    setInterval(() => {
      const curExpStamp = cookie.get("access_expires");
      const curCurStamp = Math.round(Date.now() / 1000);
      cnt++;
      if (curExpStamp > curCurStamp) res("Token Changed!");
      if (cnt === 5) rej("Token not changed..");
    }, 1000);
  });
};

export const refresh = () =>
  new Promise((resolve, reject) => {
    const expireStamp = cookie.get("access_expires");
    const currentStamp = Math.round(Date.now() / 1000);

    if (expireStamp <= currentStamp && !lock) {
      lock = true;
      const refreshToken = cookie.get("refresh_token");
      axios
        .put(`${process.env.VITE_APP_BASE_URL}/auth/token`, undefined, {
          headers: { "X-refresh-token": refreshToken }
        })
        .then((res) => {
          cookie.set("access_token", res.data.access_token, {
            path: "/",
            domain:
              process.env.NODE_ENV === "development" ? "" : ".dsm-repo.com"
          });
          cookie.set("refresh_token", res.data.refresh_token, {
            path: "/",
            domain:
              process.env.NODE_ENV === "development" ? "" : ".dsm-repo.com"
          });
          cookie.set("access_expires", res.data.access_expired_at, {
            path: "/",
            domain:
              process.env.NODE_ENV === "development" ? "" : ".dsm-repo.com"
          });
          cookie.set("refresh_expires", res.data.refresh_expired_at, {
            path: "/",
            domain:
              process.env.NODE_ENV === "development" ? "" : ".dsm-repo.com"
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
