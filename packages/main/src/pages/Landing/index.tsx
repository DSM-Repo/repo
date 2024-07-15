import * as _ from "./components";
import { Footer } from "ui";

export const Landing = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] bg-[#373737]">
      <_.FirstSec />
      <_.SecondSec />
      <_.ThirdSec />
      <_.FourthSec />
      <Footer className="px-[12rem_!important]" />
    </div>
  );
};
