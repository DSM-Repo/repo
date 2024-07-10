import { Outlet } from "react-router-dom";
import { Header } from "ui";

export const Layout = () => {
  return (
    <>
      <div className="fixed z-30 w-full flex items-center">
        <Header />
        <span className="pointable absolute right-48 text-[#ffffff] font-bold line-fit">
          Login →
        </span>
      </div>
      <Outlet />
    </>
  );
};
