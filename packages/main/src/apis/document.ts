import { useMyQuery, IResume } from "@configs/util";

export const studentDetail = (id: string) =>
  useMyQuery<IResume>("document", `/student/${id}`);
