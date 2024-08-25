import { useMyMutation } from "@configs/util";
import { ILogin, IData } from "./types";
export * from "./types";

export const login = () =>
  useMyMutation<ILogin, IData>("post", "auth", "/teacher");
