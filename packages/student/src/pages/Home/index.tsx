import { Feedback, Profile, Section } from "./components";
import { Footer } from "ui";

export const Home = () => {
  return (
    <div className="flex justify-center items-center w-full h-full relative overflow-x-hidden">
      <div className="col-flex items-start my-[auto] py-10 w-5/6 max-w-5xl min-w-[826px] gap-8 px-10">
        <Profile />
        <Section />
        <Footer className="w-full h-fit p-6 px-6 rounded-lg" />
      </div>
      <Feedback />
    </div>
  );
};
