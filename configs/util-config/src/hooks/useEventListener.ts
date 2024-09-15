import { useEffect } from "react";

type EventListenerProps = {
  eventType: keyof WindowEventMap; // 이벤트 타입
  callback: (e: Event) => void; // 콜백 함수
  target?: EventTarget; // 이벤트 리스너를 적용할 타겟 (기본값: window)
  useCallbackOnLoad?: boolean;
};

export const useEventListeners = (listeners: EventListenerProps[]) => {
  useEffect(() => {
    // 이벤트 리스너를 타겟에 추가
    listeners.forEach(
      ({ eventType, callback, target = window, useCallbackOnLoad }) => {
        if (!!useCallbackOnLoad) {
          callback(null as any);
        }
        // target이 addEventListener 메소드를 지원하는지 확인
        if (target && typeof (target as any).addEventListener === "function") {
          target.addEventListener(eventType, callback);
        }
      }
    );

    return () => {
      // cleanup 시 리스너 제거
      listeners.forEach(({ eventType, callback, target = window }) => {
        if (
          target &&
          typeof (target as any).removeEventListener === "function"
        ) {
          target.removeEventListener(eventType, callback);
        }
      });
    };
  }, [listeners]);
};
