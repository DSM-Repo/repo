// 마진을 태그로 구분하여 삽입
const MARGIN = { SPAN: 24, DIV: 10 };

export const checkOverflow = (item: HTMLElement, maxHeight: number = 1150) => {
  const queue = Array.from(item.childNodes).map((i) => i as HTMLElement);
  const pages: Array<{ element: HTMLElement; height: number }[]> = [[]];

  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const location = item.offsetTop + item.offsetHeight;

    if (location < maxHeight) {
      item.style.visibility = "visible";
    } else {
      item.style.visibility = "hidden";
      
      const elementHeight = item.offsetHeight;
      if (elementHeight > maxHeight * 0.6) {
        const childElements = Array.from(item.children) as HTMLElement[];
        
        if (childElements.length > 0) {
          for (const child of childElements) {
            const copiedChild = child.cloneNode(true) as HTMLElement;
            copiedChild.style.visibility = "visible";
            
            const height = pages[pages.length - 1].reduce((acc, { element, height }) => acc + height + (acc ? MARGIN[element.tagName] || 0 : 0), 0);
            
            if (height + child.offsetHeight + (MARGIN[child.tagName] || 0) >= maxHeight) {
              pages.push([]);
            }
            
            if (pages[pages.length - 1].length === 0) copiedChild.style.marginTop = "0";
            pages[pages.length - 1].push({ element: copiedChild, height: child.offsetHeight });
          }
        } else {
          const copiedItem = item.cloneNode(true) as HTMLElement;
          copiedItem.style.visibility = "visible";
          
          const height = pages[pages.length - 1].reduce((acc, { element, height }) => acc + height + (acc ? MARGIN[element.tagName] || 0 : 0), 0);
          
          if (height + item.offsetHeight + (MARGIN[item.tagName] || 0) >= maxHeight) {
            pages.push([]);
          }
          
          if (pages[pages.length - 1].length === 0) copiedItem.style.marginTop = "0";
          pages[pages.length - 1].push({ element: copiedItem, height: item.offsetHeight });
        }
      } else {
        const copiedItem = item.cloneNode(true) as HTMLElement;
        copiedItem.style.visibility = "visible";
        
        const height = pages[pages.length - 1].reduce((acc, { element, height }) => acc + height + (acc ? MARGIN[element.tagName] || 0 : 0), 0);
        
        if (height + item.offsetHeight + (MARGIN[item.tagName] || 0) >= maxHeight) {
          pages.push([]);
        }
        
        if (pages[pages.length - 1].length === 0) copiedItem.style.marginTop = "0";
        pages[pages.length - 1].push({ element: copiedItem, height: item.offsetHeight });
      }
    }
  }

  return pages.filter((item) => item.length).map((item) => item.map((innerItem) => innerItem.element));
};
