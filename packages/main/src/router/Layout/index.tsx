import { Header, Modal } from "./components";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const Layout = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-full h-screen bg-[#2E2E2E]">
      <Header setOpened={setOpened} />
      <Modal opened={opened} setOpened={setOpened} />
      <Outlet />
    </div>
  );
};
