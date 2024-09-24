import { studentAll } from "@/apis";
import { useParams } from "react-router-dom";
import { Resume } from "ui";
import { Cover } from "./Cover";
import { useRef } from "react";

export const Render = () => {
  const { grade } = useParams();
  const { data } = studentAll(grade as string);
  const pages = useRef(6);

  return (
    <div className="col-flex">
      <Cover grade={Number(grade)} />
      {data?.data
        .sort(
          (cur, prev) =>
            Number(cur.writer.class_info.school_number) -
            Number(prev.writer.class_info.school_number)
        )
        .map((i) => (
          <div
            className="relative"
            key={i.id}
            ref={(item) => {
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
            <Resume data={i} showPadding />
            <span className="text-black absolute top-0 section invisible">
              {i.writer.name}_{i.writer.class_info.school_number}_
              {i.writer.major}
            </span>
          </div>
        ))}
    </div>
  );
};
