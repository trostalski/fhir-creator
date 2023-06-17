import { RefObject, useCallback, useEffect, useState } from "react";

const useResize = (resizeRef: RefObject<HTMLElement>, startSize: number) => {
  const [isResizing, setIsResizing] = useState(false);
  const [resizeWidth, setResizeWidth] = useState<number>(
    startSize || resizeRef.current!.offsetWidth
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
    setResizeWidth,
    resizeRef,
    startResizing,
    isResizing,
  };
};

export default useResize;
