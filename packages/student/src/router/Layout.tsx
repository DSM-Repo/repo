import { Sidebar } from "ui";
import { completion, currentInfo, resumeData } from "@/apis";
import { Outlet } from "react-router-dom";
import { useResumeData } from "@/hooks";
import { useEffect } from "react";

export const Layout = () => {
  const { data } = currentInfo();
  const { data: progress } = completion();

  const { data: resume } = resumeData();
  const { data: _resume, set } = useResumeData();

  useEffect(() => {
    if (resume) {
      set((prev) => ({ ...prev, data: resume }));
    }
  }, [resume]);

  return (
    <div className="w-full h-screen bg-black flex">
      <Sidebar
        profile={{
          major: data?.major || "",
          name: data?.name || "",
          percent: progress?.percent_complete || 0,
          status: _resume?.status
        }}
        items={[
          {
            name: "메인",
            sections: [
              { icon: "House", name: "홈", urls: ["/"] },
              { icon: "Book", name: "도서관", urls: ["/library", "/book"] }
              // { icon: "Document", name: "내 레주메", urls: ["/detail"] }
            ]
          },
          {
            name: "포트폴리오",
            sections: [
              {
                icon: "User",
                name: "내 정보",
                urls: ["/write/1"],
                checked: progress?.writer_info
              },
              {
                icon: "Document",
                name: "자기소개",
                urls: ["/write/2"],
                checked: progress?.introduce
              },
              {
                icon: "ChartCircle",
                name: "프로젝트",
                urls: ["/write/3"],
                checked: progress?.project
              },
              {
                icon: "Chart",
                name: "자격증 & 수상",
                urls: ["/write/4"],
                checked: progress?.certificate_and_award
              },
              {
                icon: "Users",
                name: "활동",
                urls: ["/write/5"],
                checked: progress?.activity
              }
            ]
          }
        ]}
      />
      <Outlet />
    </div>
  );
};
