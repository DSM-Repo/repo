import { Footer } from "ui";
import { Profile, Section } from "./components";

export const Home = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="col-flex items-start my-[auto] py-10 w-5/6 max-w-5xl min-w-[826px] gap-8 px-10">
        <Profile />
        <Section />
        <Footer className="w-full h-fit p-6 px-6 rounded-lg" />
      </div>
    </div>
  );
};
