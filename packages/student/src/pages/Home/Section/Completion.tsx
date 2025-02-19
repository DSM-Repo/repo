import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Title } from "ui";
import { resumeCompletion, resumeDetail } from "@/api";

interface IProp {
  title: string;
  complete?: boolean;
}

Chart.register(ArcElement);

const Item = ({ title, complete }: IProp) => (
  <div className="p-3 flex w-full items-center gap-10 justify-between flex-shrink-0">
    <span className="text-[16px] font-normal">{title}</span>
    {complete && <span className="text-[16px] px-2 py-1 bg-green-800 border-green-700 border-[1px] rounded-lg text-green-400">완성됨</span>}
  </div>
);

export const Completion = () => {
  const { data: completeData } = resumeCompletion();
  const { data: resumeData } = resumeDetail();

  let data = [
    { label: "", value: completeData?.percent_complete || 0, color: "#37E517", cutout: "50%" },
    { label: "", value: 100 - (completeData?.percent_complete || 0), color: "#333333", cutout: "50%" }
  ];

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true)
      }
    ]
  };

  return (
    <Box className="gap-5" padding="32px 25px 32px 32px">
      <Title title="레주메 완성도" subTitle="레주메를 완성해 보세요" />
      <div className="flex w-full gap-4 items-center">
        <div className="w-[250px] col-flex gap-6 flex-shrink-0 h-fit">
          <div className="col-flex w-full items-center justify-between">
            <Item title="내 정보" complete={completeData?.writer_info} />
            <Item title="자기소개" complete={completeData?.introduce} />
            <Item title="프로젝트" complete={completeData?.project} />
            <Item title="자격증 & 수상" complete={completeData?.certificate_and_award} />
            <Item title="활동" complete={completeData?.activity} />
          </div>
        </div>
        <div className="w-full h-fit flex items-center justify-center px-2">
          <div className="w-[240px] h-[240px] relative">
            <div className="w-full h-full absolute flex flex-center">
              {resumeData?.status === "ONGOING" ? (
                <span className="text-green-400 text-[48px] font-bold after:content-['%'] after:text-32px after:font-medium">{completeData?.percent_complete}</span>
              ) : (
                <span className="text-green-400 text-[48px] font-bold">{resumeData?.status === "SUBMITTED" ? "제출됨" : "공개됨"}</span>
              )}
            </div>
            <Doughnut data={finalData} options={{ cutout: 90, maintainAspectRatio: false, aspectRatio: 1, animation: { duration: 1000 } }} />
          </div>
        </div>
      </div>
    </Box>
  );
};
