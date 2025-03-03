// 마진을 태그로 구분하여 삽입
const MARGIN = { SPAN: 24, DIV: 10 };

export const checkOverflow = (item: HTMLElement, maxHeight: number = 1080) => {
  const queue = Array.from(item.childNodes).map((i) => i as HTMLElement);
  const pages: Array<{ element: HTMLElement; height: number }[]> = [[]];

  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const location = item.offsetTop + item.offsetHeight;

    if (location < maxHeight) item.style.visibility = "visible";
    else if (location >= maxHeight) {
      const copiedItem = item.cloneNode(true) as HTMLElement;
      item.style.visibility = "hidden";
      copiedItem.style.visibility = "visible";
      const height = pages[pages.length - 1].reduce((acc, { element, height }) => acc + height + (acc ? MARGIN[element.tagName] : 0), 0);
      if (height + item.offsetHeight + MARGIN[item.tagName] >= maxHeight) pages.push([]);
      if (height === 0) copiedItem.style.marginTop = "0";
      pages[pages.length - 1].push({ element: copiedItem, height: item.offsetHeight });
    }
  }

  return pages.filter((item) => item.length).map((item) => item.map((innerItem) => innerItem.element));
};
