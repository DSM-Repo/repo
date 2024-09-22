import { Percentage } from "./Percentage";
import { useAuth } from "@configs/util";
import { Profile } from "./Profile";
import { ISectionProp, Section } from "./Section";
import { Ternary } from "@configs/util";

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
  const { getRole } = useAuth();
  return (
    <div className="flex-shrink-0 col-flex justify-between px-2 py-3 w-[260px] h-screen bg-gray-800 border-r-[1px] border-r-gray-700">
      <div className="col-flex gap-3">
        <Profile img="" name={profile.name} major={profile.major} />
        <div className="col-flex gap-6">
          {items.map((i) => (
            <div className="col-flex gap-1">
              <span className="px-3 text-[14px] font-light text-gray-200">
                {i.name}
              </span>
              <div className="col-flex">
                {i.sections.map((j) => (
                  <Section
                    name={j.name}
                    urls={j.urls}
                    icon={j.icon}
                    checked={j.checked}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Ternary data={getRole() === "student" && profile?.percent}>
        <Percentage percent={profile?.percent} status={profile?.status} />
      </Ternary>
    </div>
  );
};
