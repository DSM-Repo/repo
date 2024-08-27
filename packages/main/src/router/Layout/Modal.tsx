import { Icon } from "@iconify/react";
import { Logo } from "@/assets";
import { Box } from "ui";

interface IProp {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ opened, setOpened }: IProp) => {
  return (
    <div
      className={`fixed size-full bg-[#00000060] z-40 flex-center ${opened ? "flex" : "hidden"}`}
    >
      <Box
        width="560px"
        padding="40px 40px 60px 40px"
        className="flex-center gap-5"
      >
        <Icon
          icon="ph:x-bold"
          className="self-end pointable"
          width={25}
          color="white"
          onClick={() => setOpened(false)}
        />
        <Logo className="w-28" />
        <span>로그인 유형을 선택해주세요</span>
        <div
          className="relative w-96 h-12 rounded-md bg-[#2E2E2E] flex gap-6 items-center cursor-pointer"
          onClick={() =>
            window.location.replace(`${process.env.VITE_APP_URL_STUDENT}/login`)
          }
        >
          <div className="rounded-l-md bg-black w-[70px] h-full flex flex-center">
            <Icon icon="ph:student-bold" color="white" width={25} />
          </div>
          <span>학생 로그인하기</span>
        </div>
        <div
          className="relative w-96 h-12 rounded-md bg-[#2E2E2E] flex gap-6 items-center cursor-pointer"
          onClick={() =>
            window.location.replace(`${process.env.VITE_APP_URL_TEACHER}/login`)
          }
        >
          <div className="rounded-l-md bg-black w-[70px] h-full flex flex-center">
            <Icon icon="mdi:book-outline" color="white" width={25} />
          </div>
          <span>선생님 로그인하기</span>
        </div>
      </Box>
    </div>
  );
};
