import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { instance, path } from "..";

type pathNameType = "auth" | "document" | "user" | "feedback" | "major";

export const useMyQuery = <T>(
  pathname: pathNameType,
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
