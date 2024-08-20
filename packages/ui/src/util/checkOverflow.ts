export const checkOverflow = (item: HTMLElement) => {
  // 정리가 시급함
  let queue = [item];
  let over: HTMLElement[][] = [];
  let height = 0;
  while (queue.length) {
    const data = queue.shift();
    if (data) {
      const loc = data.offsetTop + data.offsetHeight - 51;
      data.style.visibility = "visible";
      if (loc > 780 && !data.classList.contains("checkAble")) {
        if (!!!over.length) {
          over.push([]);
        }
        height = over[over.length - 1].reduce((acc, i) => {
          return acc + i.offsetHeight + (i.tagName === "SPAN" ? 24 : 10);
        }, 0);
        if (
          height + data.offsetHeight + (data.tagName === "SPAN" ? 24 : 10) >
          781
        ) {
          over.push([]);
        }
        data.style.visibility = "hidden";
        over[over.length - 1].push(data);
      }
      if (data.classList.contains("checkAble")) {
        Array.from(data.childNodes).map((i) => {
          queue.push(i as HTMLElement);
        });
      }
    }
  }
  return over;
};
