import { useParams } from "react-router-dom";

export const useEssentialParams = <T>(): T => {
  const params = useParams();

  return params as T;
};
