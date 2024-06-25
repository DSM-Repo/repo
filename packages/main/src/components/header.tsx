import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.svg?react";

export const Header = () => {
  return (
    <div className="flex items-center justify-center w-full bg-[#1B1B1B] py-3 fixed top-0 left-0 z-30">
      <Logo
        width="72px"
        height="22px"
        className="cursor-pointer"
        onClick={() => window.location.replace("http://localhost:5173/")}
        //student, teacher 등 url이 다른 사이트에서도 홈에 쉽게 접속할 수 있게 window 방식으로 작성
      />
      <span className="pointable absolute right-48 text-[#ffffff] font-bold">
        Login →
      </span>
    </div>
  );
};
