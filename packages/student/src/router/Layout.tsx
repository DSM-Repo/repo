import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import { Sidebar } from "ui";
import { noticeList, resumeCompletion, resumeDetail, studentInform } from "@/api";

export const Layout = () => {
  const { data: completionData } = resumeCompletion();
  const { data: studentData } = studentInform();
  const { data: resumeData } = resumeDetail();
  const { data: noticeData } = noticeList();

  const notices = noticeData ? noticeData?.number_of_data - noticeData?.data.filter((i) => i.checked).length : 0;
  const { writer_info, introduce, project, certificate_and_award, activity, percent_complete: percent } = completionData || {};

  return (
    <div className="w-full h-screen bg-black flex">
      <ReactQueryDevtools />
      <Sidebar
        profile={{ ...studentData, percent, status: resumeData?.status || "ONGOING" }}
        items={[
          {
            name: "메인",
            sections: [
              { icon: "House", name: "홈", urls: ["/"] },
              { icon: "Book", name: "도서관", urls: ["/library", "/book"] },
              { icon: "File", name: "내 레주메", urls: ["/preview"] },
              { icon: "Bell", name: "공지", urls: ["/notice"], subData: notices === 0 ? undefined : notices }
            ]
          },
          {
            name: "포트폴리오",
            sections: [
              { icon: "User", name: "내 정보", urls: ["/write/inform"], checked: writer_info },
              { icon: "Document", name: "자기소개", urls: ["/write/introduce"], checked: introduce },
              { icon: "ChartCircle", name: "프로젝트", urls: ["/write/projects"], checked: project },
              { icon: "Chart", name: "자격증 & 수상", urls: ["/write/certifications"], checked: certificate_and_award },
              { icon: "Users", name: "활동", urls: ["/write/activities"], checked: activity }
            ]
          }
        ]}
      />
      <div className="w-full h-full relative">
        <div className="absolute w-full h-[200px] bg-gradient-to-b from-[#222222FF] to-[#22222200] z-0" />
        <Outlet />
      </div>
    </div>
  );
};
