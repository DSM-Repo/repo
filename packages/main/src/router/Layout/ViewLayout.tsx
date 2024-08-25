import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import { Header, SideBar, SideBarButton, SideBarDrop } from "ui";
import { useAuth } from "@configs/util";
import { useOpen } from "@/hooks/useOpen";
import { SideBarDropF } from "./components/SideBarDropF";

const type = {
  teacher: "학생 상세",
  library: "도서관"
};

export const ViewLayout = () => {
  const [params] = useSearchParams();
  const { opened, setOpened } = useOpen();
  const loc = useLocation().pathname.split("/")[2] as "teacher" | "library";
  const { getRole } = useAuth();

  return (
    <div className="w-full h-screen bg-gray-900">
      <div className="size-full flex">
        <SideBar type="free">
          <span className="text-title3">{type[loc]}</span>
          <div className="col-flex gap-4">
            {loc !== "teacher" && (
              <div className="col-flex">
                <span>빠른 이동</span>
                <SideBarDrop
                  selected={opened === "1반"}
                  deepSelected="2111 육기준"
                  title="1반"
                  icon="Edit"
                  selections={["1", "2", "3", "4", "5", "6", "7"]}
                />
                <SideBarDrop
                  selected={opened === "2반"}
                  title="2반"
                  icon="Edit"
                  selections={["1", "2", "3", "4", "5", "6", "7"]}
                />
                <SideBarDrop
                  selected={opened === "3반"}
                  title="3반"
                  icon="Edit"
                  selections={["1", "2", "3", "4", "5", "6", "7"]}
                />
                <SideBarDrop
                  selected={opened === "4반"}
                  title="4반"
                  icon="Edit"
                  selections={["1", "2", "3", "4", "5", "6", "7"]}
                />
              </div>
            )}

            <div className="col-flex">
              <span className="mb-2">기타</span>
              {getRole() === "teacher" && loc === "teacher" && (
                <>
                  <SideBarButton
                    action={() => setOpened("피드백 작성")}
                    selected={opened === "피드백 작성"}
                    title="피드백 작성"
                    icon="Edit"
                  />
                  <SideBarButton
                    action={() => setOpened("피드백 목록")}
                    selected={opened === "피드백 목록"}
                    title="피드백 목록"
                    icon="Edit"
                  />
                </>
              )}
              {getRole() === "teacher" && loc !== "teacher" && (
                <>
                  <SideBarDropF
                    actions={[
                      { name: "공개", action: () => {} },
                      { name: "비공개", action: () => {} }
                    ]}
                    deepSelected="공개"
                    title="공개 여부"
                    icon="Edit"
                    forceOpen
                  />
                  <SideBarButton
                    selected={false}
                    title="다운로드"
                    icon="Edit"
                  />
                </>
              )}
              <SideBarButton
                selected={false}
                title="나가기"
                icon="Edit"
                onClick={() => window.location.replace(`${params.get("prev")}`)}
              />
            </div>
          </div>
        </SideBar>
        <div className="size-full col-flex">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
