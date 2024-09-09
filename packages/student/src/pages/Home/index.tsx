import { confirm, currentInfo, feedback } from "@/apis";
import { toast } from "react-toastify";
import {
  Layout,
  sidebarType,
  useSideBarOpen,
  buttonType,
  Profile,
  Title
} from "ui";
import { Feedback } from "./Feedback";
import { Completion } from "./Section/Completion";
import { Status } from "./Section/Status";
import { Introduce } from "./Section/Introduce";

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
  const { data: studentData } = currentInfo();
  const { mutate } = confirm();
  const { sideOpened } = useSideBarOpen();

  const handleUpload = (id: string) => {
    mutate(`?id=${id}`, {
      onSuccess: () => {
        refetch();
        toast.success("성공적으로 반영되었습니다!");
      }
    });
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
      <div className="w-full h-full col-flex justify-between">
        <div className="px-8 gap-6 h-fit flex items-center">
          <Profile size={120} round="40px" />
          <Title
            title={studentData?.name || "홍길동"}
            titleSize="36px"
            subTitle={studentData?.major || "전공 미정"}
            subTitleSize="20px"
          />
        </div>
        <div
          className={`${sideOpened ? "col-flex" : "grid grid-cols-[fit-content_10%] grid-rows-[137px_1fr]"} h-full gap-6 p-8`}
        >
          <Completion />
          <Status />
          <Introduce />
        </div>
      </div>
    </Layout>
  );
};
