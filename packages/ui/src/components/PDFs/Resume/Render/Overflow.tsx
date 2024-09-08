import { PageLayout } from "../Layout";

interface IProp {
  items: HTMLElement[][];
  showPadding?: boolean;
}

const OverFlowContent = ({ item }: { item: HTMLElement }) => (
  <div
    ref={(items) => {
      items?.childNodes.forEach((item) => {
        (item as HTMLElement).style.visibility = "visible";
      });
    }}
    dangerouslySetInnerHTML={{ __html: item.outerHTML }}
  />
);

export const Overflow = ({ items, showPadding }: IProp) => {
  return items?.map((item, index) => (
    <PageLayout
      key={index}
      showPadding={showPadding}
      ref={(item: HTMLElement) => {
        if (item?.childNodes) {
          item?.childNodes?.forEach((i, j) => {
            if (!!!j) {
              (i.childNodes[0] as HTMLElement).style.marginTop = "0 !important";
            }
          });
        }
      }}
    >
      {item?.map((i, j) => <OverFlowContent item={i} key={j} />)}
    </PageLayout>
  ));
};
