import { First } from "./First";
import { Second } from "./Second";
import { Third } from "./Third";
import { Fourth } from "./Fourth";

interface IProp {
  setOpened: () => void;
}

export const Sections = ({ setOpened }: IProp) => {
  return (
    <main className="flex flex-col py-[170px] w-2/3 gap-[80px]">
      <First setOpened={setOpened} />
      <Second />
      <Third />
      <Fourth />
    </main>
  );
};
