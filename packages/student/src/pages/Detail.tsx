import { useResumeData } from "@/hooks";
import { Inform, Layout, Projects } from "ui";

export const Detail = () => {
  const { data } = useResumeData();

  return (
    <Layout
      buttons={[
        { icon: "Arrow", rotate: "left", title: "이전으로", action: () => {} },
        { icon: "Arrow", rotate: "right", title: "다음으로", action: () => {} }
      ]}
    >
      <div
        className="absolute invisible"
        ref={(item) => {
          item?.childNodes.forEach((i) => {
            setTimeout(() => {
              if (
                (i?.childNodes[0]?.childNodes[0] as HTMLElement)?.style
                  .visibility === "hidden"
              ) {
                i.parentElement?.removeChild(i);
              }
            }, 20);
          });
        }}
      >
        <Inform data={data} setMax={() => {}} />
        {data?.project_list?.map((i) => (
          <Projects data={i} setMax={() => {}} key={i.element_id} />
        ))}
      </div>
    </Layout>
  );
};
