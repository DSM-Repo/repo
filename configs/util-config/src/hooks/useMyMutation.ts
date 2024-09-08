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
      if (typeof item === "string") {
        let _url = path[pathname] + url + item;
        const res = await instance[type](_url);
        return res.data;
      } else {
        let _url = path[pathname] + url;
        const res = await instance[type](_url, item);
        return res.data;
      }
    }
  });
};
