import { IStudent } from "ui/src/organisms/SideBar/types";
import { Profile } from "./Profile";
import { Section } from "./Section";
import { Footer } from "ui";
export * from "./Feedbacks";

interface IProp {
  user: IStudent;
}

export const Sections = ({ user }: IProp) => {
  return (
    <div className="grid grid-rows-[0.8fr_1.2fr_1fr] gap-8 w-4/6 h-full px-10">
      <Profile user={user} />
      <Section user={user} />
      <Footer className="h-fit p-6 px-6 rounded-lg" />
    </div>
  );
};
