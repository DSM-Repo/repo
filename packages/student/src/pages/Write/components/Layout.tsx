interface IProp {
  title: string;
  subTitle: string;
  children: React.ReactElement | React.ReactElement[];
}

export const Layout = ({ title, subTitle, children }: IProp) => {
  return (
    <div className="w-full h-full flex flex-col gap-5 shrink-0 box-border p-10">
      <div className="flex flex-col gap-1">
        <span className="text-white font-bold text-2xl">{title}</span>
        <span className="text-[#BBBBBB] font-light text-lg">{subTitle}</span>
      </div>
      <div className="flex flex-col gap-7">{children}</div>
    </div>
  );
};
