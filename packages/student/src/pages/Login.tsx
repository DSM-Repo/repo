import { useNavigate } from "react-router-dom";
import { Button, Header, Input } from "ui";
import { useAuth } from "@configs/util";
import { toast } from "react-toastify";
import { useState } from "react";
import { login } from "@/apis";

export const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { mutate } = login();

  const [data, setData] = useState({
    account_id: "",
    password: ""
  });

  const handleLogin = () => {
    mutate(data, {
      onSuccess: (res) => {
        setToken({ ...res, role: "student" });
        toast.success("성공적으로 로그인되었습니다");
        navigate("/");
      }
    });
  };

  return (
    <div className="flex w-full h-screen relative flex-center">
      <Header className="absolute top-0" />
      <div className="col-flex items-center gap-10">
        <span className="text-title1">로그인</span>
        <Input
          value={data.account_id}
          onChange={(e) => setData({ ...data, account_id: e.target.value })}
          label="아이디"
          placeholder="스퀘어 아이디를 입력하세요"
          size="large"
        />
        <Input
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          size="large"
          password
        />
        <Button onClick={handleLogin} size="large">
          로그인
        </Button>
      </div>
    </div>
  );
};
