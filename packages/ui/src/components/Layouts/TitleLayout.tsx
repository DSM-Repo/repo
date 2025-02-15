import { IHeader, Layout } from "./Layout";
import { Title } from "..";

interface IProp extends IHeader {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

export const TitleLayout = ({ buttons, sidebars, title, subTitle, children }: IProp) => {
  return (
    <Layout buttons={buttons} sidebars={sidebars}>
      <div className="col-flex w-full px-[60px] py-6 gap-3">
        <Title title={title} subTitle={subTitle} />
        {children}
      </div>
    </Layout>
  );
};
