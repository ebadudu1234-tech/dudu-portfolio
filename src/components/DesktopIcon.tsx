import { useState } from "react";
import { motion } from "framer-motion";

interface DesktopIconProps {
  label: string;
  icon: string;
  position?: { top?: string; right?: string; left?: string; bottom?: string };
  onDoubleClick?: () => void;
}

const DesktopIcon = ({ label, icon, position = {}, onDoubleClick }: DesktopIconProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1 cursor-pointer select-none"
      style={position}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
      onClick={(e) => {
        e.stopPropagation();
        setSelected(true);
      }}
      onDoubleClick={() => {
        setSelected(true);
        onDoubleClick?.();
      }}
    >
      <motion.div
        className={`w-[64px] h-[64px] flex items-center justify-center ${
          selected ? "brightness-75 contrast-125" : ""
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={icon} alt={label} className="w-[56px] h-[56px] object-contain" draggable={false} />
      </motion.div>
      <span
        className={`text-[11px] font-retro px-1.5 py-0.5 leading-tight text-center max-w-[90px] ${
          selected ? "retro-selected" : "retro-icon-label"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
};

export default DesktopIcon;
