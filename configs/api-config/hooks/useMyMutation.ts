import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { instance, path } from "..";

type pathNameType =
  | "auth"
  | "document"
  | "user"
  | "feedback"
  | "major"
  | "file";
type apiType = "post" | "patch" | "delete";

export const useMyMutation = <T, K>(
  type: apiType,
  pathname: pathNameType,
  url: string
): UseMutationResult<K, Error, T> => {
  return useMutation<K, Error, T>({
    mutationFn: async (data): Promise<K> => {
      const res = await instance[type](path[pathname] + url, data as any);
      return res.data;
    }
  });
};
