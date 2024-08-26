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
    </div>
  );
};
