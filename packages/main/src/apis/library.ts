import { useMyQuery, useMyMutation } from "@configs/util";
import { IAccess, ILibrary } from "./types";

export const getLibrary = (id: string, isPublic: boolean) =>
  useMyQuery<ILibrary>("library", `/${id}${isPublic ? "/public" : ""}`);

export const libraryAccess = () =>
  useMyMutation<IAccess, undefined>("patch", "library", "/access-right");
