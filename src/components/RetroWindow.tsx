import { useRef, useCallback, useState, type ReactNode, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RetroWindowProps {
  id: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  isActive: boolean;
  isMinimized: boolean;
  onClose: (id: string) => void;
  onBringToFront: (id: string) => void;
  onUpdatePosition: (id: string, x: number, y: number) => void;
  onMinimize: (id: string) => void;
  children: ReactNode;
}

const RetroWindow = ({
  id,
  title,
  x,
  y,
  width,
  height,
  zIndex,
  isActive,
  isMinimized,
  onClose,
  onBringToFront,
  onUpdatePosition,
  onMinimize,
  children,
}: RetroWindowProps) => {
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      onBringToFront(id);
      isDragging.current = true;
      dragOffset.current = {
        x: e.clientX - x,
        y: e.clientY - y,
      };

      const handleMouseMove = (moveEvent: globalThis.MouseEvent) => {
        if (!isDragging.current) return;
        const newX = Math.max(0, moveEvent.clientX - dragOffset.current.x);
        const newY = Math.max(25, moveEvent.clientY - dragOffset.current.y);
        onUpdatePosition(id, newX, newY);
      };

      const handleMouseUp = () => {
        isDragging.current = false;
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    },
    [id, x, y, onBringToFront, onUpdatePosition]
  );

  // Touch support
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      onBringToFront(id);
      const touch = e.touches[0];
      dragOffset.current = {
        x: touch.clientX - x,
        y: touch.clientY - y,
      };

      const handleTouchMove = (moveEvent: TouchEvent) => {
        const t = moveEvent.touches[0];
        const newX = Math.max(0, t.clientX - dragOffset.current.x);
        const newY = Math.max(25, t.clientY - dragOffset.current.y);
        onUpdatePosition(id, newX, newY);
      };

      const handleTouchEnd = () => {
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      };

      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    },
    [id, x, y, onBringToFront, onUpdatePosition]
  );

  return (
    <AnimatePresence>
      {!isMinimized && (
        <motion.div
          ref={windowRef}
          className="absolute select-none"
          style={{
            left: x,
            top: y,
            width,
            height,
            zIndex,
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onMouseDown={() => onBringToFront(id)}
        >
          {/* Window frame */}
          <div
            className={`flex flex-col h-full retro-outset ${
              isActive ? "shadow-lg" : "shadow-md opacity-95"
            }`}
            style={{ background: "hsl(var(--primary))" }}
          >
            {/* Title bar */}
            <div
              className={`flex items-center h-[22px] px-2 gap-2 shrink-0 cursor-grab active:cursor-grabbing ${
                isActive
                  ? "retro-window-titlebar-active"
                  : "retro-window-titlebar-inactive"
              }`}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* Close button */}
              <button
                className="w-[12px] h-[12px] rounded-none retro-outset bg-primary flex items-center justify-center shrink-0 hover:brightness-90"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose(id);
                }}
                title="Close"
              >
                <span className="text-[8px] leading-none font-bold text-foreground">✕</span>
              </button>

              {/* Title */}
              <div className="flex-1 text-center text-[11px] font-retro text-foreground truncate leading-[22px]">
                {title}
              </div>

              {/* Minimize (collapse) button */}
              <button
                className="w-[12px] h-[12px] rounded-none retro-outset bg-primary flex items-center justify-center shrink-0 hover:brightness-90"
                onClick={(e) => {
                  e.stopPropagation();
                  onMinimize(id);
                }}
                title="Minimize"
              >
                <span className="text-[8px] leading-none font-bold text-foreground">—</span>
              </button>
            </div>

            {/* Content area */}
            <div className="flex-1 overflow-auto retro-inset m-[2px] bg-card">
              {children}
            </div>

            {/* Status bar */}
            <div className="h-[18px] shrink-0 flex items-center px-3 text-[10px] font-retro text-muted-foreground border-t border-border">
              {title}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RetroWindow;
