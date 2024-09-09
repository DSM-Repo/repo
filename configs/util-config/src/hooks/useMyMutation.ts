// @ts-expect-error
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { instance, path, pathType } from "../apis";

type apiType = "post" | "patch" | "delete" | "put";

export const useMyMutation = <T, K>(
  type: apiType,
  pathname: pathType,
  url: string
): UseMutationResult<K, Error, T> => {
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
        throw new Error((error as Error).message); // 에러 발생 시 throw
      }
    }
  });
};
