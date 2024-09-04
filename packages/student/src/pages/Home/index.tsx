import { confirm, feedback, resumeData } from "@/apis";
import { toast } from "react-toastify";
import { Layout, sidebarType, useSideBarOpen, buttonType } from "ui";
import { Feedback } from "./Feedback";
import { Completion } from "./Section/Completion";
import { Status } from "./Section/Status";
import { Introduce } from "./Section/Introduce";
import { useEffect } from "react";
import { useResumeData } from "@/hooks";

const buttons: buttonType[] = [
  {
    icon: "Bell",
    title: "피드백 목록",
    action: "피드백 목록"
  }
];

const types = {
  WRITER_INFO: "내 정보",
  INTRODUCE: "자기소개",
  ACTIVITY: "활동",
  ACHIEVEMENT: "자격증 & 수상",
  PROJECT: "프로젝트"
};

export const Home = () => {
  const { data, refetch } = feedback();
  const { mutate } = confirm();
  const { data: resume } = resumeData();
  const { sideOpened } = useSideBarOpen();
  const { set } = useResumeData();

  useEffect(() => {
    if (data) {
      set((prev) => ({ ...prev, data: resume }));
    }
  }, [data]);

  const handleUpload = (id: string) => {
    mutate(
      { id },
      {
        onSuccess: () => {
          refetch();
          toast.success("성공적으로 반영되었습니다!");
        }
      }
    );
  };

  const sidebars: sidebarType[] = [
    {
      width: "500px",
      type: "standard",
      name: "피드백 목록",
      items: data
        ? data?.data?.map((i) => ({
            name: types[i.type],
            key: i.id,
            content: (
              <Feedback
                teacher={i.teacher_name}
                content={i.comment}
                type={i.type}
                confirm={() => handleUpload(i.id)}
              />
            ),
            keepOpen: true
          }))
        : []
    }
  ];

  return (
    <Layout buttons={buttons} sidebars={sidebars}>
      <div
        className={`flex ${sideOpened ? "flex-col after:pb-[6px]" : "flex-row"} max-lg:flex-col w-full h-full gap-6 p-8`}
      >
        <Completion />
        <div className="w-full h-full col-flex gap-6">
          <Status />
          <Introduce />
        </div>
      </div>
    </Layout>
  );
};
