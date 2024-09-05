import { Ternary } from "@configs/util";

interface IProp {
  title?: string;
  subTitle?: string;
  titleSize?: string;
  subTitleSize?: string;
  row?: boolean;
}

export const Title = ({
  title,
  subTitle,
  titleSize = "24px",
  subTitleSize = "16px",
  row
}: IProp) => {
  return (
    <div className={`${row ? "flex items-center" : "col-flex"} gap-3`}>
      <Ternary data={title}>
        <span
          style={{ fontSize: titleSize }}
          className="font-semibold leading-none"
        >
          {title}
        </span>
      </Ternary>
      <Ternary data={subTitle}>
        <span
          style={{ fontSize: subTitleSize }}
          className="text-gray-100 font-light leading-none"
        >
          {subTitle}
        </span>
      </Ternary>
    </div>
  );
};
