import { feedbackConfirm, feedbackList, studentInform } from "@/api";
import { Completion, Introduce } from "./Section";
import { Document } from "@configs/type";
import { toast } from "react-toastify";
import { Feedback } from "./Feedback";
import {
  Layout,
  sidebarType,
  useSideBarOpen,
  buttonType,
  Profile,
  Title
} from "ui";

const buttons: buttonType[] = [
  {
    icon: "Bell",
    title: "피드백 목록",
    action: "피드백 목록"
  }
];

const types: Record<Document.sectionType, string> = {
  WRITER_INFO: "내 정보",
  INTRODUCE: "자기소개",
  ACTIVITY: "활동",
  ACHIEVEMENT: "자격증 & 수상",
  PROJECT: "프로젝트"
};

export const Home = () => {
  const { data: feedbackData, refetch: feedbackRefetch } = feedbackList();
  const { mutate: confirmMutate } = feedbackConfirm();
  const { data: studentData } = studentInform();
  const { sideOpened } = useSideBarOpen();

  const handleUpload = (id: string) => {
    confirmMutate(`?id=${id}`, {
      onSuccess: () => {
        feedbackRefetch();
        toast.success("성공적으로 반영되었습니다!");
      }
    });
  };

  const sidebars: sidebarType[] = [
    {
      width: "450px",
      type: "standard",
      name: "피드백 목록",
      items: feedbackData
        ? feedbackData?.data?.map((i) => ({
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
      <div className="w-full h-full col-flex justify-between gap-8">
        <div className="px-8 gap-6 h-fit flex items-center">
          <Profile size={120} round="40px" />
          <Title
            title={studentData?.name}
            titleSize="36px"
            subTitle={studentData?.major}
            subTitleSize="20px"
          />
        </div>
        <div
          className={`${sideOpened ? "col-flex" : "flex"} max-xl:col-flex gap-8 w-full h-full px-8 pb-8`}
        >
          <Completion />
          <Introduce />
        </div>
      </div>
    </Layout>
  );
};
