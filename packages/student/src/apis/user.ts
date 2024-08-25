import { IStudent, useMyQuery } from "@configs/util";

export const currentInfo = () => useMyQuery<IStudent>("user", "/current/info");
