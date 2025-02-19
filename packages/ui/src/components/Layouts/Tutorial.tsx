import { useEffect, useState } from "react";
import { Ternary, useShortcut } from "@configs/util";
import { Icon } from "../Others";

type stepType = {
  img?: any;
  content: string;
};

interface IProp {
  name: string;
  steps: stepType[];
}

export const Tutorial = ({ name, steps }: IProp) => {
  const [opened, setOpened] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (localStorage.getItem(`skipTutorial_${name}`)) {
      setOpened(false);
    }
  }, []);

  const handleMove = (value: number) => {
    if (value < 0 || value > steps.length - 1) return;
    setStep(value);
  };

  if (opened) {
    return (
      <div className="w-full h-screen absolute left-0 top-0 z-50">
        <div className="relative w-full h-full bg-[#000000DD] col-flex flex-center gap-5">
          <div className="absolute left-0 top-0">
            <span
              className="text-gray-200 pointable"
              onClick={() => {
                setOpened(false);
                localStorage.setItem(`skipTutorial_${name}`, "true");
              }}
            >
              안내(튜토리얼) 스킵
            </span>
          </div>
          <div className="w-[500px] h-fit">
            <div
              style={{
                transform: `translateX(-${580 * step}px)`
              }}
              className="w-fit flex gap-20 transition-all duration-300"
            >
              {steps.map((i, j) => (
                <div key={j} style={{ opacity: step === j ? 1 : 0 }} className="transition-all duration-300 w-[500px] h-[300px] col-flex gap-2 flex-center">
                  {i.img && <img src={i.img} />}
                  <span className="text-body4 whitespace-pre-wrap break-words text-center">{i.content}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 items-center">
            {Array.from({ length: steps.length }).map((_, j) => (
              <div key={j} className={`w-[10px] h-[10px] ${step === j ? "bg-white" : "bg-gray-500"} transition-all duration-150 rounded-full`} />
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-gray-700 rounded-full pointable transition-all" onClick={() => handleMove(step - 1)}>
              <Icon name="Arrow" rotate="left" color={step !== 0 ? "white" : "#777777"} />
            </div>
            <div
              className="p-3 bg-gray-700 rounded-full pointable transition-all"
              onClick={
                step !== steps.length - 1
                  ? () => handleMove(step + 1)
                  : () => {
                      setOpened(false);
                      localStorage.setItem(`skipTutorial_${name}`, "true");
                    }
              }
            >
              <Icon name={step !== steps.length - 1 ? "Arrow" : "Check"} rotate={step !== steps.length - 1 ? "right" : undefined} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
