import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { instance, path, pathType } from "..";

export const useMyQuery = <T>(
  pathname: pathType,
  url: string
): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: [path[pathname], url],
    queryFn: async (): Promise<T> => {
      const res = await instance.get(path[pathname] + url);
      return res.data;
    }
  });
};
