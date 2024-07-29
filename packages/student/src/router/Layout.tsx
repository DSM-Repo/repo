import { userDefault as user } from "ui/src/organisms/SideBar/index.stories";
import { SideBar, SideBarButton, SideBarDrop } from "ui";
import { Outlet } from "react-router-dom";
import { Header } from "ui";

export const Layout = () => {
  return (
    <div className="w-full h-[100vh] flex">
      <SideBar user={user} className="min-w-[250px]">
        <SideBarButton title="내 정보" icon="My" url="/" />
        <SideBarButton title="도서관" icon="Library" url="/library" />
      </SideBar>
      <div className="flex flex-col w-full h-full">
        <Header />
        <div className="w-full h-full overflow-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
