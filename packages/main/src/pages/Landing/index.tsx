import * as _ from "./components";
import { Footer } from "ui";

export const Landing = () => {
  return (
    <div className="col-flex items-center gap-40">
      <_.FirstSec />
      <_.SecondSec />
      <_.ThirdSec />
      <_.FourthSec />
      <Footer className="px-[12rem_!important] -mt-40" />
    </div>
  );
};
