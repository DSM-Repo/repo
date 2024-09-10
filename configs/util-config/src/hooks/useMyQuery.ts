// @ts-expect-error
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { instance, path, pathType } from "../apis";

export const useMyQuery = <T>(
  pathname: pathType,
  url: string,
  placeholder: T
): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: [path[pathname], url],
    queryFn: async (): Promise<T> => {
      const res = await instance.get(path[pathname] + url);
      return res.data;
    },
    placeholderData: placeholder
  });
};
