import { SideBar, SideBarButton, SideBarDrop } from "ui";
import { completion, currentInfo } from "@/apis";
import { studentData } from "@configs/default";
import { Outlet } from "react-router-dom";
import { Header } from "ui";

export const Layout = () => {
  const { data } = currentInfo();
  const { data: progress } = completion();

  return (
    <div className="w-full h-screen flex">
      <SideBar
        type="student"
        user={data || studentData}
        progress={progress?.percentComplete || 0}
        className="min-w-[250px]"
      >
        <SideBarButton title="홈" icon="My" url="/" />
        {/* <SideBarButton title="도서관" icon="Library" url="/library" /> */}
        <SideBarDrop
          title="포트폴리오 수정"
          icon="Edit"
          urls={[
            { title: "내 정보", url: "/write/1" },
            { title: "자기소개", url: "/write/2" },
            { title: "자격증 & 수상", url: "/write/3" },
            { title: "활동", url: "/write/4" },
            { title: "프로젝트", url: "/write/5" }
          ]}
        />
      </SideBar>
      <div className="flex flex-col w-full h-full">
        <Header />
        <div className="w-full h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
