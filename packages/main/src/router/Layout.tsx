import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Box, Header } from "ui";
import Logo from "@/assets/Logo.svg?react";
import { useState } from "react";

export const Layout = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-full h-[100vh] bg-[#2E2E2E]">
      <div className="fixed z-30 w-full flex items-center">
        <Header />
        <span
          className="pointable absolute right-48 font-bold leading-none"
          onClick={() => setOpened(true)}
        >
          Login →
        </span>
      </div>
      <div
        className={`fixed size-full bg-[#00000060] z-40 flex-center ${opened ? "flex" : "hidden"}`}
      >
        <Box
          size={{
            width: "560px",
            height: "fit-content",
            padding: "40px 40px 60px 40px",
          }}
          className="flex-center gap-5"
        >
          <Icon
            icon="ph:x-bold"
            className="self-end pointable"
            width={25}
            onClick={() => setOpened(false)}
          />
          <Logo className="w-28" />
          <span>로그인 유형을 선택해주세요</span>
          <div
            className="relative w-96 h-12 rounded-md bg-[#2E2E2E] flex gap-6 items-center cursor-pointer"
            onClick={() =>
              window.location.replace(
                `${process.env.VITE_APP_URL_STUDENT}/login`,
              )
            }
          >
            <div className="rounded-l-md bg-black w-[70px] h-full flex flex-center">
              <Icon icon="ph:student-bold" color="white" width={25} />
            </div>
            학생 로그인하기
          </div>
          <div
            className="relative w-96 h-12 rounded-md bg-[#2E2E2E] flex gap-6 items-center cursor-pointer"
            onClick={() =>
              window.localStorage.replace(
                `${process.env.VITE_APP_URL_STUDENT}/login`,
              )
            }
          >
            <div className="rounded-l-md bg-black w-[70px] h-full flex flex-center">
              <Icon icon="mdi:book-outline" color="white" width={25} />
            </div>
            선생님 로그인하기
          </div>
        </Box>
      </div>
      <Outlet />
    </div>
  );
};
