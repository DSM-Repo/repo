import { Bell, Logo } from "@/assets/newAssets";
import { Header } from "./components/Header";

export const Home = () => {
  return (
    <div className="w-screen h-screen bg-[#111111] flex">
      <div className="w-[260px] h-full bg-[#222222] border-[#333333] border-r-[1px]"></div>
      <div className="w-full h-full flex flex-col">
        <Header />
      </div>
    </div>
  );
};
