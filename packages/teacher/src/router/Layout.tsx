import { Outlet } from "react-router-dom";
import { Header, SideBar, SideBarButton } from "ui";
import { ITeacher } from "ui/src/organisms/SideBar/types";

export const userDefault: ITeacher = {
  name: "김윤이",
  type: "teacher",
};

export const Layout = () => {
  const user = userDefault;
  return (
    <div className="w-full h-[100vh] flex">
      <Header className="fixed" />
      <SideBar user={user} className="min-w-[250px] fixed">
        <SideBarButton title="레주메 관리" icon="Resume" url="/home" />
        <SideBarButton title="도서관" icon="TLibrary" url="/library" />
        <SideBarButton title="전공 추가" icon="Major" url="/majoradd" />
        {/* <SideBarButton title="피드백 관리" icon="Feedback" url="/feedbacklist" /> */}
      </SideBar>
      <div className="flex flex-col w-full h-full ml-[250px] mt-[76px]">
          <Outlet />
      </div>
    </div>
  );
};
