import { useRef, useCallback, useState } from "react";
import { motion } from "framer-motion";

interface DesktopIconProps {
  label: string;
  icon: string;
  position?: { top?: string; right?: string; left?: string; bottom?: string };
  onDoubleClick?: () => void;
}

const DesktopIcon = ({ label, icon, position = {}, onDoubleClick }: DesktopIconProps) => {
  const [selected, setSelected] = useState(false);
  const [dragPos, setDragPos] = useState<{ x: number; y: number } | null>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, elemX: 0, elemY: 0 });
  const hasMoved = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const startDrag = useCallback((clientX: number, clientY: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    isDragging.current = true;
    hasMoved.current = false;
    dragStart.current = { x: clientX, y: clientY, elemX: rect.left, elemY: rect.top };
  }, []);

  const moveDrag = useCallback((clientX: number, clientY: number) => {
    if (!isDragging.current) return;
    const dx = clientX - dragStart.current.x;
    const dy = clientY - dragStart.current.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved.current = true;
    setDragPos({
      x: dragStart.current.elemX + dx,
      y: dragStart.current.elemY + dy,
    });
  }, []);

  const endDrag = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected(true);
    startDrag(e.clientX, e.clientY);

    const onMove = (me: MouseEvent) => moveDrag(me.clientX, me.clientY);
    const onUp = () => { endDrag(); window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, [startDrag, moveDrag, endDrag]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.stopPropagation();
    setSelected(true);
    const t = e.touches[0];
    startDrag(t.clientX, t.clientY);

    const onMove = (te: TouchEvent) => { te.preventDefault(); moveDrag(te.touches[0].clientX, te.touches[0].clientY); };
    const onEnd = () => { endDrag(); window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onEnd); };
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onEnd);
  }, [startDrag, moveDrag, endDrag]);

  const style: React.CSSProperties = dragPos
    ? { position: "fixed", left: dragPos.x, top: dragPos.y, right: "auto", bottom: "auto" }
    : { position: "absolute", ...position };

  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col items-center gap-1.5 cursor-pointer select-none z-[5]"
      style={style}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onDoubleClick={() => {
        if (!hasMoved.current) {
          setSelected(true);
          onDoubleClick?.();
        }
      }}
    >
      <motion.div
        className={`w-[76px] h-[76px] md:w-[72px] md:h-[72px] flex items-center justify-center ${
          selected ? "brightness-75 contrast-125" : ""
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={icon} alt={label} className="w-[68px] h-[68px] md:w-[64px] md:h-[64px] object-contain" draggable={false} />
      </motion.div>
      <span
        className={`text-[13px] md:text-[12px] font-retro px-2 py-0.5 leading-tight text-center max-w-[100px] ${
          selected ? "retro-selected" : "retro-icon-label"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
};

export default DesktopIcon;
