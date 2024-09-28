import { Api, Placeholder } from "@configs/type";
import { useMyQuery } from "@configs/util";

/** 학생 정보 조회 API */
export const studentInform = () =>
  useMyQuery<Api.Info.Student>("user", "", Placeholder.StudentPlace);

/** 학생 정보 조회 API */
export const teacherInform = () =>
  useMyQuery<Api.Info.Teacher>("user", "", Placeholder.TeacherPlace);
