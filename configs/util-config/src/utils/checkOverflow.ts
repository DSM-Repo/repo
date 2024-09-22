// 마진을 태그로 구분하여 삽입
const MARGIN = { SPAN: 24, DIV: 10 };
const MAXHEIGHT = 1050;

export const checkOverflow = (item: HTMLElement) => {
  let queue = [item];
  let pages: HTMLElement[][] = [];
  let height = 0;
  let parentLocation = 0;

  while (queue.length) {
    const item = queue.shift();

    if (!item) break;

    item.style.visibility = "visible"; // 요소 visible 활성화 (오버플로우되어 넘어갔다가 다시 돌아왔을 경우에도 안 보이는 문제 해결)

    // if (item.parentElement.parentElement.classList.contains("layout")) {
    //   parentLocation = item.parentElement.parentElement.offsetTop;
    // }

    // console.log(
    //   item.offsetTop,
    //   item.offsetTop - parentLocation,
    //   parentLocation,
    //   item
    // );
    // const itemLocation =
    //   item.offsetTop - parentLocation + item.offsetHeight - 51; // 아이템 위치 (스크롤시에도 동일한 위치 표기)
    const itemLocation = item.offsetTop + item.offsetHeight - 51;
    const isCheckAble = item.classList.contains("checkAble");
    if (itemLocation > MAXHEIGHT && !isCheckAble) {
      if (!!!pages.length) pages.push([]);
      height = pages[pages.length - 1].reduce((acc, i) => {
        const addedHeight = acc + i.offsetHeight; // 이전 높이 + 이번 요소의 높이
        return !!!acc ? addedHeight : addedHeight + MARGIN[i.tagName]; // 첫 요소인지 아닌지 구분 (마진 구분을 위해)
      }, 0);
      if (height + item.offsetHeight + MARGIN[item.tagName] > MAXHEIGHT) {
        pages.push([]);
      }
      item.style.visibility = "hidden"; // 오버플로우된 요소는 숨김 처리 ('display: none'으로 설정하면 요소 복사 불가)
      pages[pages.length - 1].push(item);
    } else if (isCheckAble) {
      Array.from(item.childNodes).forEach((i) => queue.push(i as HTMLElement));
    }
  }
  return pages;
};
