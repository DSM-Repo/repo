import { studentDetail } from "@/apis/document";
import { useParams } from "react-router-dom";
import { Inform, Projects } from "ui";

export const Specific = () => {
  const { id } = useParams();
  const { data } = studentDetail(id as string);

  if (data) {
    return (
      <div
        ref={(item) => {
          item?.childNodes.forEach((i) => {
            setTimeout(() => {
              if (
                (i.childNodes[0].childNodes[0] as HTMLElement).style
                  .visibility === "hidden"
              ) {
                i.parentElement?.removeChild(i);
              }
            }, 20);
          });
        }}
      >
        <Inform data={data} setMax={() => {}} fitA4 />
        {data?.project_list.map((i) => (
          <Projects data={i} setMax={() => {}} key={i.element_id} fitA4 />
        ))}
      </div>
    );
  }
};
