import { useMyMutation } from "@configs/api";
import { IImage } from "./types";

export const uploadImage = (type: "profile" | "document") =>
  useMyMutation<FormData, IImage>(
    "post",
    "file",
    `/image?type=${type.toUpperCase()}`
  );
