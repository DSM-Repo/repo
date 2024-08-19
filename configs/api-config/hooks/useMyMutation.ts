// @ts-expect-error
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { instance, path, pathType } from "..";

type apiType = "post" | "patch" | "delete" | "put";

export const useMyMutation = <T, K>(
  type: apiType,
  pathname: pathType,
  url: string
): UseMutationResult<K, Error, T> => {
  return useMutation<K, Error, T>({
    mutationFn: async (data): Promise<K> => {
      const res = await instance[type](path[pathname] + url, data as any);
      return res.data;
    }
  });
};
