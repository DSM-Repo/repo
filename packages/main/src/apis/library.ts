import { useMyQuery } from "@configs/util";
import { ILibrary } from "./types";

export const getLibrary = (id: string) =>
  useMyQuery<ILibrary>("library", `/${id}`);
