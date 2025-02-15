// @ts-expect-error
import { UseMutationResult, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { instance, path, pathType } from "../apis";

type apiType = "post" | "patch" | "delete" | "put";

export const useMyMutation = <T, K>(type: apiType, pathname: pathType, url: string, options?: UseMutationOptions<K, Error, T, unknown>): UseMutationResult<K, Error, T> => {
  return useMutation<K, Error, T>({
    mutationFn: async (item: T | string): Promise<K> => {
      try {
        let _url: string = path[pathname] + url;

        if (typeof item === "string") {
          _url += item;
          const res = await instance[type](_url);
          return res.data;
        } else {
          const res = await instance[type](_url, item);
          return res.data;
        }
      } catch (error) {
        throw new Error(error); // 에러 발생 시 throw
      }
    },
    ...options
  });
};
