import { useMyMutation, auth } from "@configs/util";
import { Box, Button, Icon, Text } from "ui";
import { useContext, useState } from "react";
import { ModalContext } from ".";

interface _ILogin {
  account_id: string;
  password: string;
}

interface ILogin_ {
  access_token: string;
  refresh_token: string;
  access_expired_at: number;
  refresh_expired_at: number;
}

const { VITE_APP_URL_STUDENT: URL_STUDENT, VITE_APP_URL_TEACHER: URL_TEACHER } = import.meta.env;

export const Modal = () => {
  const { mutate: teacher } = useMyMutation<_ILogin, ILogin_>("post", "auth", "/teacher");
  const { mutate: student } = useMyMutation<_ILogin, ILogin_>("post", "auth", "/student");

  const [data, setData] = useState({ account_id: "", password: "" });
  const { state, toggle } = useContext(ModalContext);
  const { setToken } = auth;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleLogin = (role: "teacher" | "student") => {
    const isStudent = role === "student";

    const options = {
      onSuccess: (res: ILogin_) => {
        setToken({ ...res, role });
        window.location.replace(`${isStudent ? URL_STUDENT : URL_TEACHER}`);
      }
    };

    if (isStudent) student(data, options);
    else teacher(data, options);
  };

  return (
    <div className={`${!state ? "hidden" : ""} fixed flex flex-center w-full h-screen backdrop-blur-sm z-50 bg-[#00000055]`}>
      <Box width="fit-content" height="fit-content" padding="40px">
        <button className="self-end modal">
          <Icon name="Close" className="self-end" onClick={toggle} />
        </button>
        <span className="font-black text-[40px] self-center">로그인</span>
        <div className="w-full col-flex gap-[25px]">
          <Text value={data.account_id} id="account_id" placeholder="Xquare 아이디를 입력하세요" onChange={handleChange} label="아이디" size="large" />
          <Text value={data.password} id="password" placeholder="비밀번호를 입력하세요" onChange={handleChange} label="비밀번호" size="large" password />
          <div className="w-full flex justify-between items-center">
            <Button onClick={() => handleLogin("teacher")} size="medium" icon="User" direction="center">
              선생님 로그인
            </Button>
            <Button onClick={() => handleLogin("student")} size="medium" icon="Edit" direction="center">
              학생 로그인
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};
