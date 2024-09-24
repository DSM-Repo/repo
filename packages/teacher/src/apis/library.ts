import { useMyQuery, useMyMutation, renderInstance } from "@configs/util";
import { IBook, ILibrary } from "./types";
import { useMutation } from "@tanstack/react-query";
import { Placeholder } from "@configs/type";

export const getLibrary = () =>
  useMyQuery<ILibrary>("library", ``, Placeholder.CommonLayoutPlace);

export const getBook = (id: string) =>
  useMyQuery<IBook>("library", `/${id}`, Placeholder.LibraryDetailPlace);

export const libraryAccess = (id: string) =>
  useMyMutation<string, undefined>("patch", "library", `/${id}`);

export const convertResume = () =>
  useMutation({
    mutationFn: (grade: string) => renderInstance.post("/all", { grade })
  });
