import { Percentage } from "./Percentage";
import { auth } from "@configs/util";
import { Profile } from "./Profile";
import { ISectionProp, Section } from "./Section";

interface IProp {
  profile: {
    name?: string;
    profile?: string;
    major?: string;
    percent?: number;
    status?: "ONGOING" | "SUBMITTED" | "RELEASED";
  };
  items: {
    name: string;
    sections: ISectionProp[];
  }[];
}

export const Sidebar = ({ profile, items }: IProp) => {
  const { name, major } = profile;

  const { getRole } = auth;
  return (
    <div className="flex-shrink-0 col-flex justify-between px-2 py-3 w-[260px] h-screen bg-gray-800 border-r-[1px] border-r-gray-700">
      <div className="col-flex gap-3">
        <Profile img="" name={profile.name} major={profile.major} />
        <div className="col-flex gap-2">
          {items.map(({ name, sections }) => (
            <div className="col-flex gap-1" key={name}>
              <span className="px-3 text-[14px] font-light text-gray-200">{name}</span>
              <div className="col-flex">
                {sections.map(({ name, urls, icon, checked, subData }) => (
                  <Section key={name} name={name} urls={urls} icon={icon} checked={checked} subData={subData} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {getRole() === "student" && <Percentage percent={profile?.percent} status={profile?.status} />}
    </div>
  );
};
