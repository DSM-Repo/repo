import { useMyQuery } from "@configs/util";
import { ILibrary } from "./types";

export const getLibrary = () => useMyQuery<ILibrary>("library", ``);
