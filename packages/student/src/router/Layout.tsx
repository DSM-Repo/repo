import { Outlet } from "react-router-dom";
import { Header } from "ui";
import { SideBar, SideBarButton, SideBarDrop } from "ui";
import { userDefault as user } from "ui/src/organisms/SideBar/index.stories";

export const Layout = () => {
  return (
    <div className="w-full h-[100vh] flex">
      <SideBar user={user}>
        <SideBarButton title="내 정보" icon="My" url="/" />
        <SideBarButton title="도서관" icon="Library" url="/library" />
        <SideBarDrop
          title="포트폴리오 수정"
          icon="Edit"
          urls={[
            { title: "내 정보", url: "/write/1" },
            { title: "자기소개", url: "/write/2" },
            { title: "자격증 & 수상", url: "/write/3" },
            { title: "활동", url: "/write/4" },
            { title: "프로젝트", url: "/write/5" },
          ]}
        />
      </SideBar>
      <div className="flex flex-col w-full h-[calc(100%-47px)]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
