import { PageLayout } from "../Layout";
import DOMPurify from "dompurify";

interface IProp {
  items: HTMLElement[][];
}

export const Overflow = ({ items }: IProp) =>
  items?.map((item, index) => <PageLayout key={index}>{item?.map(({ outerHTML }, index) => <div key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(outerHTML) }} />)}</PageLayout>);
