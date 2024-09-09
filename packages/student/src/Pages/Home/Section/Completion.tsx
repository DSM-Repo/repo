import { Box, Title, useSideBarOpen } from "ui";
import { Ternary } from "@configs/util";
import { completion } from "@/apis";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

interface IProp {
  title: string;
  complete?: boolean;
}

const Item = ({ title, complete }: IProp) => {
  return (
    <div className="p-3 flex w-full items-center gap-10 justify-between flex-shrink-0">
      <span className="text-[16px] font-normal">{title} </span>
      <Ternary data={complete}>
        <span className="text-[16px] px-2 py-1 bg-green-800 border-green-700 border-[1px] rounded-lg text-green-400">
          완성됨
        </span>
      </Ternary>
    </div>
  );
};

export const Completion = () => {
  const { data: complete } = completion();

  let data = [
    {
      label: "",
      value: complete?.percent_complete || 0,
      color: "#37E517",
      cutout: "50%"
    },
    {
      label: "",
      value: 100 - (complete?.percent_complete || 0),
      color: "#333333",
      cutout: "50%"
    }
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
    <Box
      className="gap-5 row-start-1 row-end-3 col-start-1 col-end-1"
      padding="32px 20px 32px 20px"
    >
      <div className="px-3">
        <Title title="레주메 완성도" subTitle="레주메를 완성해 보세요" />
      </div>
      <div className="flex w-full gap-4 items-center">
        <div className="w-[250px] col-flex gap-6 flex-shrink-0 h-fit">
          <div className="col-flex w-full items-center justify-between">
            <Item title="내 정보" complete={complete?.writer_info} />
            <Item title="자기소개" complete={complete?.introduce} />
            <Item title="프로젝트" complete={complete?.project} />
            <Item
              title="자격증 & 수상"
              complete={complete?.certificate_and_award}
            />
            <Item title="활동" complete={complete?.activity} />
          </div>
        </div>
        <div className="w-full h-fit flex items-center justify-center px-10">
          <div className="w-[240px] h-[240px] relative">
            <div className="w-full h-full absolute flex flex-center">
              <span className="text-green-400 text-[48px] font-bold">
                {complete?.percent_complete || 0}
                <span className="text-inherit text-[32px] font-medium">%</span>
              </span>
            </div>
            <Doughnut
              data={finalData}
              options={{
                cutout: 90,
                maintainAspectRatio: false,
                aspectRatio: 1
              }}
            />
          </div>
        </div>
      </div>
    </Box>
  );
};
