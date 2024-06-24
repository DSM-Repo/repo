import Logo from "../assets/Logo.svg?react";

export const Header = () => {
  return (
    <div className="flex items-center justify-center w-full bg-[#1B1B1B] py-3 fixed top-0 left-0 z-30">
      <Logo width="72px" height="22px" />
      <span className="cursor-pointer absolute right-48 text-[#ffffff] font-bold hover:text-[#c5c5c5]">
        Login →
      </span>
    </div>
  );
};
