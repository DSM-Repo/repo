import { Outlet } from "react-router-dom";
import { ITeacher, Header, SideBar, SideBarButton } from "ui";

const user: ITeacher = {
  name: "육기준",
  type: "teacher",
};

export const Layout = () => {
  return (
    <div className="w-full h-[100vh] flex">
      <SideBar user={user}>
        <SideBarButton title="내 정보" icon="My" url="/" />
        <SideBarButton title="도서관" icon="Library" url="/library" />
      </SideBar>
      <div className="flex flex-col w-full h-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
