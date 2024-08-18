import { Logo } from '@/icons';
import { instance } from '@configs/axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from 'ui';

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
      const response = await instance.post('https://prod-server.xquare.app/whopper/auth/teacher', {
        account_id: accountId,
        password: password,
      });

      if (response.status === 200) {
        const data = response.data;
        console.log('로그인 성공:', data);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        navigate('/home');
      } else {
        setError('로그인에 실패했습니다.');
      }

    } catch (error: any) {
      console.error('Error:', error);
      if (error.response) {
        if (error.response.status === 401) {
          setError('아이디 또는 비밀번호가 일치하지 않습니다.');
        } else if (error.response.status === 400) {
          setError('잘못된 요청입니다. 입력값을 확인하세요.');
        } else if (error.response.status === 500) {
          setError('서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.');
        } else {
          setError('로그인 중 오류가 발생했습니다.');
        }
      } else {
        setError('로그인 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-[url('../icons/Login.png')] bg-opacity-10 flex justify-center items-center">
      <div className="w-[693px] h-[438px] bg-[#2E2E2E] p-8 rounded-lg flex justify-evenly items-center flex-col">
        <div className="flex items-center mb-8">
          <Logo />
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
