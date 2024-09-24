import { useMyMutation, useAuth } from "@configs/util";
import { Box, Button, Icon, Text } from "ui";
import { useState } from "react";

interface IProp {
  open: boolean;
  setOpened: () => void;
}

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

export const Modal = ({ open, setOpened }: IProp) => {
  const { mutate: teacher } = useMyMutation<_ILogin, ILogin_>(
    "post",
    "auth",
    "/teacher"
  );
  const { mutate: student } = useMyMutation<_ILogin, ILogin_>(
    "post",
    "auth",
    "/student"
  );
  const { setToken } = useAuth();

  const [data, setData] = useState({
    account_id: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = (type: "teacher" | "student") => {
    if (type === "student") {
      student(data, {
        onSuccess: (res) => {
          setToken({ ...res, role: "student" });
          window.location.replace(`${import.meta.env.VITE_APP_URL_STUDENT}`);
        }
      });
    } else {
      teacher(data, {
        onSuccess: (res) => {
          setToken({ ...res, role: "teacher" });
          window.location.replace(`${import.meta.env.VITE_APP_URL_TEACHER}`);
        }
      });
    }
  };

  return (
    <div
      className={`${!open ? "hidden" : ""} fixed flex flex-center w-full h-screen backdrop-blur-sm z-20 bg-[#00000055]`}
    >
      <Box width="fit-content" height="fit-content" padding="40px">
        <button className="self-end modal">
          <Icon name="Close" className="self-end" onClick={setOpened} />
        </button>
        <span className="font-black text-[40px] self-center">로그인</span>
        <div className="w-full col-flex gap-[25px]">
          <Text
            value={data.account_id}
            id="account_id"
            placeholder="Xquare 아이디를 입력하세요"
            onChange={handleChange}
            label="아이디"
            size="large"
          />
          <Text
            value={data.password}
            id="password"
            placeholder="비밀번호를 입력하세요"
            onChange={handleChange}
            label="비밀번호"
            size="large"
            password
          />
          <div className="w-full flex justify-between items-center">
            <Button
              onClick={() => handleLogin("teacher")}
              size="medium"
              icon="User"
              direction="center"
            >
              선생님 로그인
            </Button>
            <Button
              onClick={() => handleLogin("student")}
              size="medium"
              icon="Edit"
              direction="center"
            >
              학생 로그인
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};
