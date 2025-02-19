import { useSideBarOpen, Profile, Title, SidebarProvider, HeaderProvider } from "ui";
import { Completion, Introduce } from "./Section";
import { Feedback } from "./Feedback";
import { studentInform } from "@/api";

export const Home = () => {
  const { data: studentData } = studentInform();
  const { open } = useSideBarOpen();

  return (
    <SidebarProvider elements={[{ name: "피드백 목록", element: <Feedback /> }]}>
      <HeaderProvider buttons={[{ icon: "Bell", title: "피드백 목록", action: { type: "OPEN_SIDEBAR", sideBarName: "피드백 목록" } }]}>
        <div className="w-full h-full col-flex justify-between gap-8">
          <div className="px-8 gap-6 h-fit flex items-center">
            <Profile size={120} round="40px" />
            <Title title={studentData?.name} subTitle={studentData?.major} titleSize="36px" subTitleSize="20px" />
          </div>
          <div className={`${open === "피드백 목록" ? "col-flex" : "flex"} max-xl:col-flex gap-8 w-full h-full px-8 pb-8`}>
            <Completion />
            <Introduce />
          </div>
        </div>
      </HeaderProvider>
    </SidebarProvider>
  );
};
