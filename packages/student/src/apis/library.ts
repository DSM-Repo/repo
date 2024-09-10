import { useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

export const libraryList = () =>
  useMyQuery<Api.Library.Library>("library", "", Placeholder.CommonLayoutPlace);

export const libraryDetail = (id: string) =>
  useMyQuery<Api.Library.LibraryDetail>(
    "library",
    `/${id}`,
    Placeholder.LibraryDetailPlace
  );
