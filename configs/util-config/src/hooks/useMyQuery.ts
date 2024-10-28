// prettier-ignore
// @ts-expect-error
import { UseQueryResult, useQuery, keepPreviousData } from "@tanstack/react-query";
import { instance, path, pathType } from "../apis";
import { AxiosError } from "axios";

export const useMyQuery = <T>(
  pathname: pathType,
  url: string,
  placeholder: T
): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: [path[pathname], url],
    queryFn: async (): Promise<T> => {
      try {
        const res = await instance.get(path[pathname] + url);
        return res.data;
      } catch (e) {
        throw e;
      }
    },
    placeholderData: keepPreviousData || placeholder
  });
};
