import { Input } from "../../../ui/src/atoms/Input";
import Logo from "./Logo.svg?React";

export const TeacherLogin = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center">
      <div className="w-[693px] h-[438px] bg-[#2E2E2E] p-8 rounded-lg">
        {/* Logo and Title */}
        <div className="flex items-center mb-8">
          <Logo className="w-[30px] h-[30px] bg-[#FFFFFF]"/>
          <span className="text-[#D8D8D8] text-[25px] font-black ml-2">Teacher</span>
          <div className="w-[1px] h-[40px] bg-white mx-4"></div>
          <span className="text-white text-[30px] font-bold">로그인</span>
        </div>
        
        {/* ID Field */}
        <div className="mb-6">
          <label className="text-white text-[18px] font-semibold mb-2 block">아이디</label>
          <Input
            size="large"
            placeholder="아이디를 입력하세요"
            value=""
            onChange={() => {}}
            className="text-[18px] text-[#999999] font-regular w-full"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="text-white text-[18px] font-semibold mb-2 block">비밀번호</label>
          <Input
            size="large"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value=""
            onChange={() => {}}
            className="text-[18px] text-[#999999] font-regular w-full"
          />
        </div>
      </div>
    </div>
  );
};
