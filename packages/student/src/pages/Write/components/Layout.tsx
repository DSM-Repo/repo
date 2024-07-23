interface IProp {
  title: string;
  subTitle: string;
  children: React.ReactElement | React.ReactElement[];
}

export const Layout = ({ title, subTitle, children }: IProp) => {
  return (
    <div className="w-full h-full shrink-0 overflow-y-auto relative ">
      <div className="flex flex-col gap-5 box-border p-10 w-full h-full absolute">
        <div className="flex flex-col gap-1">
          <span className="text-title3">{title}</span>
          <span className="text-[#BBBBBB] text-body5">{subTitle}</span>
        </div>
        <div className="flex flex-col gap-7 pb-10">{children}</div>
      </div>
    </div>
  );
};
