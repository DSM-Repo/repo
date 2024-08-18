import { useMyMutation } from "@configs/api";
import { ILogin, IData } from "./types";
export * from "./types";

export const login = () =>
  useMyMutation<ILogin, IData>("post", "auth", "/student");
