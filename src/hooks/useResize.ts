import { RefObject, useCallback, useEffect, useRef, useState } from "react";

const useResize = (resizeRef: RefObject<HTMLElement>) => {
  const [isResizing, setIsResizing] = useState(false);
  const [resizeWidth, setResizeWidth] = useState<number | undefined>(
    resizeRef.current?.offsetWidth
  );

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing && resizeRef.current) {
        const newWidth =
          mouseMoveEvent.clientX -
          resizeRef.current.getBoundingClientRect().left;
        setResizeWidth(newWidth);
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return {
    resizeWidth,
    resizeRef,
    startResizing,
    isResizing,
  };
};

export default useResize;
