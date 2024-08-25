import { useMyMutation } from "@configs/util";
import { _ILogin, ILogin_ } from "./types";
export * from "./types";

export const login = () =>
  useMyMutation<_ILogin, ILogin_>("post", "auth", "/student");
