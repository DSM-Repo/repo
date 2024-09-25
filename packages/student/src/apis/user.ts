import { useMyQuery } from "@configs/util";
import { Api, Placeholder } from "@configs/type";

export const studentInfo = () =>
  useMyQuery<Api.Info.Student>("user", "", Placeholder.StudentPlace);
