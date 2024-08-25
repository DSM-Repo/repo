import { useMyQuery, IResume } from "@configs/util";
import { useRef } from "react";
import { Inform, Projects } from "ui";
import { Cover } from "./Cover";
import { useParams } from "react-router-dom";

interface IData {
  data: IResume[];
  dataOfNumber: number;
}

export const Book = () => {
  const { year, grade } = useParams();
  const { data } = useMyQuery<IData>(
    "document",
    `/released/grade/${grade}/year/${year}`
  );

  const pages = useRef(5);
  return (
    <div>
      <Cover year={Number(year)} grade={Number(grade)} />
      {data?.data.length &&
        data?.data
          .sort(
            (cur, prev) =>
              Number(cur.writer.class_info.school_number) -
              Number(prev.writer.class_info.school_number)
          )
          .map((i) => {
            return (
              <div
                className="relative"
                key={i.id}
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
                  setTimeout(() => {
                    if (item) {
                      const section: HTMLSpanElement | null =
                        item.querySelector("span.section");
                      if (section) {
                        section.innerText = `${pages.current}_${section.innerHTML}`;
                      }
                      pages.current += item?.offsetHeight / 1191;
                    }
                  }, 20);
                }}
              >
                <Inform data={i} setMax={() => {}} fitA4 />
                {i.project_list.map((j) => (
                  <Projects
                    data={j}
                    setMax={() => {}}
                    key={j.element_id}
                    fitA4
                  />
                ))}
                <span className="text-black absolute top-0 section invisible">
                  {i.writer.name}_{i.writer.class_info.school_number}_
                  {i.writer.major_name}
                </span>
              </div>
            );
          })}
      {}
    </div>
  );
};
