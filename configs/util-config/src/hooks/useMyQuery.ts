// prettier-ignore
// @ts-expect-error
import { UseQueryResult, useSuspenseQuery, keepPreviousData } from "@tanstack/react-query";
import { instance, path, pathType } from "../apis";

export const useMyQuery = <T>(
  pathname: pathType,
  url: string,
  placeholder: T
): UseQueryResult<T> => {
  return useSuspenseQuery<T>({
    queryKey: [path[pathname], url],
    queryFn: async (): Promise<T> => {
      const res = await instance.get(path[pathname] + url);
      return res.data;
    },
    placeholderData: keepPreviousData || placeholder
  });
};
