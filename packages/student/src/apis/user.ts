import { IStudent } from "@configs/default";
import { useMyQuery } from "@configs/api";

export const currentInfo = () => useMyQuery<IStudent>("user", "/current/info");
