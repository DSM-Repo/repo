export const checkOverflow = (item: HTMLElement, fitA5?: boolean) => {
  // 정리가 시급함
  let queue = [item];
  let over: HTMLElement[][] = [];
  let height = 0;
  while (queue.length) {
    const data = queue.shift();
    if (data) {
      const loc = data.offsetTop + data.offsetHeight - 51;
      data.style.visibility = "visible";
      if (
        (fitA5 ? loc > 720 : loc > 1000) &&
        !data.classList.contains("checkAble")
      ) {
        if (!!!over.length) {
          over.push([]);
        }
        height = over[over.length - 1].reduce((acc, i) => {
          if (!!!acc) {
            return acc + i.offsetHeight;
          }
          return acc + i.offsetHeight + (i.tagName === "SPAN" ? 24 : 10);
        }, 0);
        if (
          height + data.offsetHeight + (data.tagName === "SPAN" ? 24 : 10) >
          (fitA5 ? 720 : 1000)
        ) {
          over.push([]);
        }
        data.classList.add("hid");
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
