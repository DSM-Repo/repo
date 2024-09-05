import { First } from "./First";
import { Second } from "./Second";
import { Third } from "./Third";
import { Fourth } from "./Fourth";

export const Sections = () => {
  return (
    <main className="flex flex-col py-[170px] w-2/3 gap-[80px]">
      <First />
      <Second />
      <Third />
      <Fourth />
    </main>
  );
};
