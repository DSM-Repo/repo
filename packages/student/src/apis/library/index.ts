import { useMyQuery } from "@configs/api";
import { ILibrary } from "./types";

export const getLibrary = () => useMyQuery<ILibrary>("library", ``);
