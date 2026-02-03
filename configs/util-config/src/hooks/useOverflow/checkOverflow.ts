const MARGIN: Record<string, number> = { SPAN: 24, DIV: 10 };

interface PageItem {
  element: HTMLElement;
  height: number;
}

const calculatePageHeight = (page: PageItem[]): number =>
  page.reduce(
    (acc, { element, height }) =>
      acc + height + (acc ? MARGIN[element.tagName] || 0 : 0),
    0
  );

const addToPages = (
  pages: PageItem[][],
  element: HTMLElement,
  height: number,
  maxHeight: number
): PageItem[][] => {
  const currentPage = pages[pages.length - 1];
  const pageHeight = calculatePageHeight(currentPage);

  const result = pageHeight + height + (MARGIN[element.tagName] || 0) >= maxHeight
    ? [...pages, []]
    : [...pages];

  const targetPage = result[result.length - 1];
  const cloned = element.cloneNode(true) as HTMLElement;
  cloned.style.visibility = "visible";
  if (targetPage.length === 0) cloned.style.marginTop = "0";

  result[result.length - 1] = [...targetPage, { element: cloned, height }];
  return result;
};

export const checkOverflow = (container: HTMLElement, maxHeight: number = 1150): HTMLElement[][] => {
  const children = Array.from(container.childNodes) as HTMLElement[];
  let pages: PageItem[][] = [[]];

  for (const child of children) {
    const location = child.offsetTop + child.offsetHeight;

    if (location < maxHeight) {
      child.style.visibility = "visible";
      continue;
    }

    child.style.visibility = "hidden";
    const elementHeight = child.offsetHeight;

    if (elementHeight > maxHeight * 0.6) {
      const grandChildren = Array.from(child.children) as HTMLElement[];

      if (grandChildren.length > 0) {
        for (const grandChild of grandChildren) {
          pages = addToPages(pages, grandChild, grandChild.offsetHeight, maxHeight);
        }
      } else {
        pages = addToPages(pages, child, elementHeight, maxHeight);
      }
    } else {
      pages = addToPages(pages, child, elementHeight, maxHeight);
    }
  }

  return pages
    .filter((page) => page.length > 0)
    .map((page) => page.map((item) => item.element));
};
