import { Footer } from "ui";
import * as _ from "./components";

export const Landing = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] bg-[#373737]">
      <_.FirstSec />
      <_.SecondSec />
      <_.ThirdSec />
      <_.FourthSec />
      <Footer />
    </div>
  );
};
