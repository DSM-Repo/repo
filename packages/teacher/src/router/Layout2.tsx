import { Outlet } from "react-router-dom";
import { Header, SideBar, SideBarButton } from "ui";
import { ITeacher } from "ui/src/organisms/SideBar/types";
import { Footer } from '../component/Footer';

export const userDefault: ITeacher = {
  name: "이태윤",
  type: "teacher",
};

export const Layout2 = () => {
  const user = userDefault;
  return (
    <div className="w-full h-[100vh] flex flex-col">
      <div className="flex flex-grow">
        <SideBar user={user} className="min-w-[250px]">
          <SideBarButton title="레주메 관리" icon="Resume" url="/home" />
          <SideBarButton title="도서관" icon="TLibrary" url="/library" />
          <SideBarButton title="전공 추가" icon="Major" url="/majoradd" />
          {/* <SideBarButton title="피드백 관리" icon="Feedback" url="/feedbacklist" /> */}
        </SideBar>
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className="flex-grow w-full h-full">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
