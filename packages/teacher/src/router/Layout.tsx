import { Header, SideBar, SideBarButton } from "ui";
import { Outlet } from "react-router-dom";
import { teacher } from "@/apis";

export const userDefault: any = {
  name: "김윤이",
  type: "teacher"
};

export const Layout = () => {
  const { data } = teacher();

  return (
    <div className="w-full h-screen flex">
      <SideBar user={data} className="min-w-[250px]" type="teacher">
        <SideBarButton title="레주메 관리" icon="Resume" url="/" />
        <SideBarButton title="도서관" icon="TLibrary" url="/library" />
        <SideBarButton title="전공 추가" icon="Major" url="/major" />
        <SideBarButton title="연혁 관리" icon="Major" url="/history" />
      </SideBar>
      <div className="w-full h-full col-flex">
        <Header />
        <div className="w-full h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
