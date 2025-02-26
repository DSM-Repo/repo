// 마진을 태그로 구분하여 삽입
const MARGIN = { SPAN: 24, DIV: 10 };
const MAXHEIGHT = 1080;

export const checkOverflow = (item: HTMLElement) => {
  let queue = [];
  let pages: Array<{ element: HTMLElement; height: number }[]> = [[]];

  Array.from(item.childNodes).forEach((item) => queue.push(item as HTMLElement));

  while (queue.length) {
    const item: HTMLElement = queue.shift();
    const location = item.offsetTop + item.offsetHeight;

    if (item.classList.contains("traversable")) Array.from(item.childNodes).forEach((item) => queue.push(item as HTMLElement));
    else if (location < MAXHEIGHT) item.style.visibility = "visible";
    else if (location >= MAXHEIGHT) {
      const copiedItem = item.cloneNode(true) as HTMLElement;
      item.style.visibility = "hidden";
      copiedItem.style.visibility = "visible";
      const height = pages[pages.length - 1].reduce((acc, prev) => acc + prev.height + (acc ? MARGIN[prev.element.tagName] : 0), 0);
      if (height + item.offsetHeight + MARGIN[item.tagName] >= MAXHEIGHT) pages.push([]);
      if (height === 0) copiedItem.style.marginTop = "0";
      pages[pages.length - 1].push({ element: copiedItem, height: item.offsetHeight });
    }
  }

  return pages.filter((item) => item.length).map((item) => item.map((innerItem) => innerItem.element));
};
