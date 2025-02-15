import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DevTool } from "@hookform/devtools";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Sidebar } from "ui";
import { noticeList, resumeCompletion, resumeDetail, studentInform } from "@/api";
import { useResumeForm } from "@/hooks";

export const Layout = () => {
  const { resumeFormMethod, ResumeFormProvider } = useResumeForm();
  const { watch, reset, control } = resumeFormMethod;

  const { data: completionData } = resumeCompletion();
  const { data: studentData } = studentInform();
  const { data: resumeData } = resumeDetail();
  const { data: noticeData } = noticeList();

  const status = watch("status");
  const notices = noticeData ? noticeData?.number_of_data - noticeData?.data.filter((i) => i.checked).length : 0;
  const { writer_info, introduce, project, certificate_and_award, activity, percent_complete: percent } = completionData || {};

  useEffect(() => reset(resumeData), [resumeData?.status]);

  return (
    <div className="w-full h-screen bg-black flex">
      <ReactQueryDevtools />
      <ResumeFormProvider>
        <Sidebar
          profile={{ ...studentData, percent, status }}
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
        <Outlet />

        <DevTool control={control} />
      </ResumeFormProvider>
    </div>
  );
};
