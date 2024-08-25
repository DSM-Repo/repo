interface IProp {
  title: string;
  subTitle: string;
  children: React.ReactElement | React.ReactElement[];
}
export const Layout = ({ title, subTitle, children }: IProp) => {
  return (
    <div className="flex justify-center py-10 size-full">
      <div className="col-flex w-[800px] gap-5">
        <div className="col-flex gap-3">
          <span className="text-title2 leading-none">{title}</span>
          <span className="text-gray-300 text-body3 leading-none">
            {subTitle}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};
