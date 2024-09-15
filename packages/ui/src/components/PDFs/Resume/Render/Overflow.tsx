import { PageLayout } from "../Layout";

interface IProp {
  items: HTMLElement[][];
  showPadding?: boolean;
  scale?: number;
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

export const Overflow = ({ items, showPadding, scale }: IProp) => {
  return items?.map((item, index) => (
    <PageLayout
      key={index}
      showPadding={showPadding}
      ref={(item: HTMLElement) => {
        if (item?.childNodes) {
          item?.childNodes?.forEach((i, j) => {
            if (!!!j) {
              const item = i.childNodes[0] as HTMLElement;
              item.style.marginTop = "0";
            }
          });
        }
      }}
      scale={scale}
    >
      {item?.map((i, j) => <OverFlowContent item={i} key={j} />)}
    </PageLayout>
  ));
};
