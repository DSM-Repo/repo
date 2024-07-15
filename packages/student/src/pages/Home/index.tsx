import { Footer } from "ui";
import { Profile, Section } from "./components";
import { user } from "./constants";

export const Home = () => {
  return (
    <div className="flex justify-center items-center w-full h-[calc(100%_-_47px)]">
      <div className="w-4/6 h-full  gap-10 px-10">
        <Profile user={user} />
        <Section user={user} />
        <Footer className="h-fit p-6 px-6 rounded-lg" />
      </div>
    </div>
  );
};
