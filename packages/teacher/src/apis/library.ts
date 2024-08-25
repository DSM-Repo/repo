import { renderInstance, useMyQuery } from "@configs/util";
import { useMutation } from "@tanstack/react-query";
import { ILibrary, IRenderAll } from "./types";
import { toast } from "react-toastify";

export const library = () => useMyQuery<ILibrary>("library", "");

export const convertResume = (item: any) =>
  useMutation({
    mutationFn: (data: IRenderAll) =>
      renderInstance.post("/all", { grade: data.grade }),
    onMutate: () => (item = toast.loading("변환중입니다.."))
  });
