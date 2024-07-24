import { useState } from "react";
import { Button, Header, Input } from "ui";

export const Login = () => {
  const [data, setData] = useState({
    accountId: "",
    password: "",
  });

  return (
    <div className="flex w-full h-[100vh] relative flex-center">
      <Header className="absolute top-0" />
      <div className="col-flex items-center gap-10">
        <span className="text-title1">로그인</span>
        <Input
          label="아이디"
          placeholder="스퀘어 아이디를 입력하세요"
          value={data.accountId}
          onChange={(e) => setData({ ...data, accountId: e.target.value })}
          size="large"
        />
        <Input
          password
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          size="large"
        />
        <Button onClick={() => {}} size="large">
          로그인
        </Button>
      </div>
    </div>
  );
};
