import { useMyQuery, useMyMutation } from "@configs/util";
import { IBook, ILibrary } from "./types";

export const getLibrary = () => useMyQuery<ILibrary>("library", ``);

export const getBook = (id: string) => useMyQuery<IBook>("library", `/${id}`);

export const libraryAccess = (id: string) =>
  useMyMutation<string, undefined>("patch", "library", `/${id}`);
