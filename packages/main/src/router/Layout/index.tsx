<<<<<<< Updated upstream
import { Header, Modal } from "./components";
import { useState } from "react";
export * from "./ViewLayout";

interface IProp {
  children: React.ReactElement | React.ReactElement[];
}
export const Layout = ({ children }: IProp) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-900">
      <Header setOpened={setOpened} />
      <Modal opened={opened} setOpened={setOpened} />
      {children}
=======
// import { useState } from "react";
import { Outlet } from "react-router-dom";
// import { Header, Modal } from "./components";

export const Layout = () => {
  // const [opened, setOpened] = useState(false);

  return (
    <div className="w-full h-fit bg-[#222222]">
      {/* <Header setOpened={setOpened} /> */}
      {/* <Modal opened={opened} setOpened={setOpened} /> */}
      <Outlet />
>>>>>>> Stashed changes
    </div>
  );
};
