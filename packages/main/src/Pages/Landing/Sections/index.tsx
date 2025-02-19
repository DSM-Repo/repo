import { First } from "./First";
import { Second } from "./Second";
import { Third } from "./Third";
import { Fourth } from "./Fourth";
export * from "./Title";

export const Sections = () => {
  return (
    <main className="flex flex-col py-[170px] max-w-2/3 gap-[160px]">
      <First />
      <Second />
      <Third />
      <Fourth />
    </main>
  );
};
