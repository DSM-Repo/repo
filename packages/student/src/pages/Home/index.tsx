import { Sections, Feedbacks } from "./components";
import { feedbacks, user } from "./constants";

export const Home = () => {
  return (
    <div className="flex w-full h-full">
      <Sections user={user} />
      <Feedbacks feedbacks={feedbacks} />
    </div>
  );
};
