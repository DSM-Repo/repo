import { useMyQuery } from "@configs/util";
import { historiesType } from "./types";

export const histories = () => useMyQuery<historiesType>("history", "");
