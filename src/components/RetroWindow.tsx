import { useRef, useCallback, type ReactNode, type MouseEvent } from "react";
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
  onResize?: (id: string, width: number, height: number) => void;
  children: ReactNode;
}

const MIN_WIDTH = 280;
const MIN_HEIGHT = 200;

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
  onResize,
  children,
}: RetroWindowProps) => {
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      onBringToFront(id);
      isDragging.current = true;
      dragOffset.current = { x: e.clientX - x, y: e.clientY - y };

      const handleMouseMove = (moveEvent: globalThis.MouseEvent) => {
        if (!isDragging.current) return;
        onUpdatePosition(id, Math.max(0, moveEvent.clientX - dragOffset.current.x), Math.max(25, moveEvent.clientY - dragOffset.current.y));
      };
      const handleMouseUp = () => { isDragging.current = false; window.removeEventListener("mousemove", handleMouseMove); window.removeEventListener("mouseup", handleMouseUp); };
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    },
    [id, x, y, onBringToFront, onUpdatePosition]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      onBringToFront(id);
      const touch = e.touches[0];
      dragOffset.current = { x: touch.clientX - x, y: touch.clientY - y };

      const handleTouchMove = (moveEvent: TouchEvent) => {
        const t = moveEvent.touches[0];
        onUpdatePosition(id, Math.max(0, t.clientX - dragOffset.current.x), Math.max(25, t.clientY - dragOffset.current.y));
      };
      const handleTouchEnd = () => { window.removeEventListener("touchmove", handleTouchMove); window.removeEventListener("touchend", handleTouchEnd); };
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    },
    [id, x, y, onBringToFront, onUpdatePosition]
  );

  // Resize from bottom-right corner
  const handleResizeMouseDown = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onBringToFront(id);
      const startX = e.clientX;
      const startY = e.clientY;
      const startW = width;
      const startH = height;

      const onMove = (me: globalThis.MouseEvent) => {
        const newW = Math.max(MIN_WIDTH, startW + (me.clientX - startX));
        const newH = Math.max(MIN_HEIGHT, startH + (me.clientY - startY));
        onResize?.(id, newW, newH);
      };
      const onUp = () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    },
    [id, width, height, onBringToFront, onResize]
  );

  const handleResizeTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.stopPropagation();
      onBringToFront(id);
      const t = e.touches[0];
      const startX = t.clientX;
      const startY = t.clientY;
      const startW = width;
      const startH = height;

      const onMove = (te: TouchEvent) => {
        te.preventDefault();
        const ct = te.touches[0];
        const newW = Math.max(MIN_WIDTH, startW + (ct.clientX - startX));
        const newH = Math.max(MIN_HEIGHT, startH + (ct.clientY - startY));
        onResize?.(id, newW, newH);
      };
      const onEnd = () => { window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onEnd); };
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("touchend", onEnd);
    },
    [id, width, height, onBringToFront, onResize]
  );

  return (
    <AnimatePresence>
      {!isMinimized && (
        <motion.div
          ref={windowRef}
          className="absolute select-none"
          style={{ left: x, top: y, width, height, zIndex }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onMouseDown={() => onBringToFront(id)}
        >
          <div
            className={`flex flex-col h-full retro-outset ${isActive ? "shadow-lg" : "shadow-md opacity-95"}`}
            style={{ background: "hsl(var(--primary))" }}
          >
            {/* Title bar */}
            <div
              className={`flex items-center h-[28px] md:h-[26px] px-2 gap-2 shrink-0 cursor-grab active:cursor-grabbing ${
                isActive ? "retro-window-titlebar-active" : "retro-window-titlebar-inactive"
              }`}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <button
                className="w-[16px] h-[16px] md:w-[14px] md:h-[14px] rounded-none retro-outset bg-primary flex items-center justify-center shrink-0 hover:brightness-90"
                onClick={(e) => { e.stopPropagation(); onClose(id); }}
                title="Close"
              >
                <span className="text-[10px] md:text-[9px] leading-none font-bold text-foreground">✕</span>
              </button>
              <div className="flex-1 text-center text-[13px] md:text-[12px] font-retro text-foreground truncate leading-[28px] md:leading-[26px]">
                {title}
              </div>
              <button
                className="w-[16px] h-[16px] md:w-[14px] md:h-[14px] rounded-none retro-outset bg-primary flex items-center justify-center shrink-0 hover:brightness-90"
                onClick={(e) => { e.stopPropagation(); onMinimize(id); }}
                title="Minimize"
              >
                <span className="text-[10px] md:text-[9px] leading-none font-bold text-foreground">—</span>
              </button>
            </div>

            {/* Content area */}
            <div className="flex-1 overflow-auto retro-inset m-[2px] bg-card">
              {children}
            </div>

            {/* Status bar */}
            <div className="h-[22px] md:h-[20px] shrink-0 flex items-center px-3 text-[11px] md:text-[10px] font-retro text-muted-foreground border-t border-border">
              {title}
            </div>

            {/* Resize handle */}
            {onResize && (
              <div
                className="absolute bottom-0 right-0 w-[18px] h-[18px] cursor-nwse-resize z-10"
                onMouseDown={handleResizeMouseDown}
                onTouchStart={handleResizeTouchStart}
              >
                {/* Grip lines */}
                <svg width="18" height="18" viewBox="0 0 18 18" className="text-muted-foreground">
                  <line x1="14" y1="4" x2="4" y2="14" stroke="currentColor" strokeWidth="1" />
                  <line x1="14" y1="8" x2="8" y2="14" stroke="currentColor" strokeWidth="1" />
                  <line x1="14" y1="12" x2="12" y2="14" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RetroWindow;
