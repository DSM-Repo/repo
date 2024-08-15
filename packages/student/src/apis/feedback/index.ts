import { useMyQuery } from "@configs/api";
import { IFeedback } from "./types";

export const getFeedback = () => useMyQuery<IFeedback>("feedback", "");
