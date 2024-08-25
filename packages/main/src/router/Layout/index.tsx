import { Header, Modal } from "./components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
export * from "./ViewLayout";

export const Layout = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-900">
      <Header setOpened={setOpened} />
      <Modal opened={opened} setOpened={setOpened} />
      <Outlet />
    </div>
  );
};
