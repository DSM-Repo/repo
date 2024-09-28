import { useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

/**
 * 도서관 문서 목록 조회 API
 */
export const libraryList = () =>
  useMyQuery<Api.Library.Library>("library", "", Placeholder.CommonLayoutPlace);

/**
 * 도서관 문서 상세조회 API
 * @param id 조회할 문서의 ID
 * @param isPublic 비공개로 조회할지, 공개로 조회할지 여부 (필수 아님)
 */
export const librarySpecific = (id: string, isPublic?: boolean) =>
  useMyQuery<Api.Library.LibraryDetail>(
    "library",
    `/${id}${isPublic ? "/public" : ""}`,
    Placeholder.LibraryDetailPlace
  );
