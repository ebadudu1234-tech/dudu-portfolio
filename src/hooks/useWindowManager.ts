import { useState, useCallback } from "react";

export interface WindowState {
  id: string;
  title: string;
  contentType: "folder-browser" | "project-detail" | "macintosh-hd";
  contentId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  isMinimized: boolean;
}

let nextZIndex = 10;

const getOffset = (count: number) => {
  const offset = (count % 8) * 28;
  return { x: 80 + offset, y: 60 + offset };
};

export const useWindowManager = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);

  const openWindow = useCallback(
    (params: {
      id: string;
      title: string;
      contentType: WindowState["contentType"];
      contentId: string;
      width?: number;
      height?: number;
    }) => {
      setWindows((prev) => {
        const existing = prev.find((w) => w.id === params.id);
        if (existing) {
          nextZIndex++;
          setActiveWindowId(params.id);
          return prev.map((w) =>
            w.id === params.id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w
          );
        }

        const offset = getOffset(prev.length);
        nextZIndex++;
        const isMobile = window.innerWidth < 768;
        const newWindow: WindowState = {
          id: params.id,
          title: params.title,
          contentType: params.contentType,
          contentId: params.contentId,
          x: isMobile ? 10 : offset.x,
          y: isMobile ? 30 : offset.y,
          width: isMobile ? window.innerWidth - 20 : (params.width || 560),
          height: isMobile ? window.innerHeight - 120 : (params.height || 400),
          zIndex: nextZIndex,
          isMinimized: false,
        };
        setActiveWindowId(params.id);
        return [...prev, newWindow];
      });
    },
    []
  );

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    setActiveWindowId((prev) => (prev === id ? null : prev));
  }, []);

  const bringToFront = useCallback((id: string) => {
    nextZIndex++;
    setActiveWindowId(id);
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, zIndex: nextZIndex } : w)));
  }, []);

  const updatePosition = useCallback((id: string, x: number, y: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w)));
  }, []);

  const resizeWindow = useCallback((id: string, width: number, height: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, width, height } : w)));
  }, []);

  return {
    windows,
    activeWindowId,
    openWindow,
    closeWindow,
    bringToFront,
    updatePosition,
    minimizeWindow,
    resizeWindow,
  };
};
