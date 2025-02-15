import { Icon, Title } from "ui";

interface IProp {
  children: React.ReactNode;
  title: string;
  subTitle: string;
  add?: () => void;
}

export const Layout = ({ children, title, subTitle, add }: IProp) => {
  return (
    <div className="col-flex gap-6 w-fit">
      <div className="flex items-center justify-between w-[500px]">
        <Title title={title} subTitle={subTitle} />
        {add && <Icon name="Add" size={48} onClick={add} className="cursor-pointer" />}
      </div>
      {children}
    </div>
  );
};
