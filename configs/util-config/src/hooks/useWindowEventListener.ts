import { useEffect } from "react";

type EventListenerProps = {
  eventType: keyof WindowEventMap;
  callback: (e: Event) => void;
  useCallbackOnLoad?: boolean;
};

export const useWindowEventListeners = (listeners: EventListenerProps[]) => {
  useEffect(() => {
    listeners.forEach(({ eventType, callback, useCallbackOnLoad }) => {
      if (!!useCallbackOnLoad) callback(null as any);
      window.addEventListener(eventType, callback);
    });

    return () => {
      listeners.forEach(({ eventType, callback }) => {
        window.removeEventListener(eventType, callback);
      });
    };
  }, [listeners]);
};
