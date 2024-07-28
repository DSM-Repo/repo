import { Footer } from "ui";
import { Profile, Section } from "./components";
import { user } from "./constants";

export const Home = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="col-flex items-start w-5/6 max-w-5xl min-w-[826px] gap-8 px-10">
        <Profile user={user} />
        <Section user={user} />
        <Footer className="w-full h-fit p-6 px-6 rounded-lg" />
      </div>
    </div>
  );
};
