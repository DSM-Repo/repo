import { Outlet } from "react-router-dom";
import { Header } from "ui";

export const Layout = () => {
  return (
    <div className="w-full h-[100vh] bg-[#2E2E2E]">
      <div className="fixed z-30 w-full flex items-center">
        <Header />
        <span className="pointable absolute right-48 font-bold leading-none">
          Login →
        </span>
      </div>
      <Outlet />
    </div>
  );
};
