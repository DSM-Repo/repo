import { PageLayout } from "../Layout";

interface IProp {
  items: HTMLElement[][];
}

export const Overflow = ({ items }: IProp) =>
  items?.map((item, index) => <PageLayout key={index}>{item?.map((item, index) => <div key={index} dangerouslySetInnerHTML={{ __html: item.outerHTML }} />)}</PageLayout>);
