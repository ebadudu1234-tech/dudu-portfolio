import { useState } from "react";
import { motion } from "framer-motion";

interface DesktopIconProps {
  label: string;
  icon: string;
  position?: { top?: string; right?: string; left?: string; bottom?: string };
}

const DesktopIcon = ({ label, icon, position = {} }: DesktopIconProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1 cursor-pointer select-none"
      style={position}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => setSelected(!selected)}
      onDoubleClick={() => setSelected(true)}
    >
      <div
        className={`w-[64px] h-[64px] flex items-center justify-center ${
          selected ? "brightness-75 contrast-125" : ""
        }`}
      >
        <img src={icon} alt={label} className="w-[56px] h-[56px] object-contain" draggable={false} />
      </div>
      <span
        className={`text-[11px] font-retro px-1 leading-tight text-center max-w-[80px] ${
          selected
            ? "retro-selected px-1"
            : "retro-icon-label"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
};

export default DesktopIcon;
