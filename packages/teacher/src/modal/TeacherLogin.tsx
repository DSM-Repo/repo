import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from 'ui';
// import Logo from "./Logo.svg?react";

export const TeacherLogin = () => {
  const [accountId, setAccountId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAccountIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (accountId.length < 5) {
      setError('아이디는 5글자 이상이어야 합니다.');
      return;
    }

    try {
      const response = await fetch('https://prod-server.xquare.app/whopper/auth/teacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          account_id: accountId,
          password: password,
        }),
      });

      if (response.status === 401) {
        setError('비밀번호가 일치하지 않습니다');
        return;
      }

      if (!response.ok) {
        throw new Error('로그인 요청 실패');
      }

      const data = await response.json();
      console.log('로그인 성공:', data);

      // 액세스 토큰 및 리프레시 토큰을 로컬 스토리지에 저장
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      // 홈 페이지로 리다이렉트
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setError('로그인 중 오류가 발생했습니다');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center">
      <div className="w-[693px] h-[438px] bg-[#2E2E2E] p-8 rounded-lg flex justify-evenly items-center flex-col">
        <div className="flex items-center mb-8">
          {/* <Logo className="w-[72px] h-[22px]" /> */}
          <span className="text-[#D8D8D8] text-[25px] font-black ml-2">Teacher</span>
          <div className="w-[1px] h-[40px] bg-white mx-4"></div>
          <span className="text-white text-[30px] font-bold">로그인</span>
        </div>
        <Input
          size="large"
          placeholder="아이디를 입력하세요"
          label="아이디"
          value={accountId}
          onChange={handleAccountIdChange}
        />
        <Input
          size="large"
          placeholder="비밀번호를 입력하세요"
          label="비밀번호"
          value={password}
          onChange={handlePasswordChange}
        />
        {error && (
          <p className="text-red-500 mt-2">{error}</p>
        )}
        <Button size="large" onClick={handleLogin}>
          로그인
        </Button>
      </div>
    </div>
  );
};
