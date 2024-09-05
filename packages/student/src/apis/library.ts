import { useMyQuery, useMyMutation } from "@configs/util";
import { IAccess, IBook, ILibrary } from "./types";

export const getLibrary = () => useMyQuery<ILibrary>("library", ``);

export const getBook = (id: string) => useMyQuery<IBook>("library", `/${id}`);

export const libraryAccess = () =>
  useMyMutation<IAccess, undefined>("patch", "library", "/access-right");
