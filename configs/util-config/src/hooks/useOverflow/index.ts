import { useEffect, useRef, useState } from "react";
import { checkOverflow } from "./checkOverflow";

interface IProp {
  observeTarget?: unknown;
  onCalc?: ({ pages, length }: { pages: Array<HTMLElement[]>; length: number }) => void;
}

export const useOverflow = ({ observeTarget, onCalc }: IProp): [React.MutableRefObject<HTMLElement>, HTMLElement[][]] => {
  const [pages, setPages] = useState<Array<HTMLElement[]>>([]);
  const target = useRef<HTMLElement>(null);

  useEffect(() => {
    if (target?.current) {
      const over = checkOverflow(target?.current);
      setPages(over);
      onCalc({ pages: over, length: over.length });
    }
  }, [observeTarget]);

  return [target, pages];
};
