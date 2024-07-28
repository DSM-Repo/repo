import { useState } from "react";
import { Button, Header, Input } from "ui";

export const Login = () => {
  const [data, setData] = useState({
    account_id: "",
    password: "",
  });

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
        <Button onClick={() => {}} size="large">
          로그인
        </Button>
      </div>
    </div>
  );
};
