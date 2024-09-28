import { useMyMutation } from "@configs/util";
import { Api } from "@configs/type";

/** 학생 로그인 API */
export const StudentLogin = () =>
  useMyMutation<Api.Auth.LoginInput, Api.Auth.LoginOutput>(
    "post",
    "auth",
    "/student"
  );

/** 선생님 로그인 API */
export const TeacherLogin = () =>
  useMyMutation<Api.Auth.LoginInput, Api.Auth.LoginOutput>(
    "post",
    "auth",
    "/teacher"
  );
