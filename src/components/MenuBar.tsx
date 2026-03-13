import { useState } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { label: "🍎", isBold: true },
  { label: "File" },
  { label: "Edit" },
  { label: "View" },
  { label: "Go" },
  { label: "Window" },
  { label: "Help" },
];

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock every minute
  useState(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  });

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="retro-menubar fixed top-0 left-0 right-0 z-50 flex h-[25px] items-center justify-between px-2 select-none">
      <div className="flex items-center gap-0">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`px-3 py-0 text-[13px] leading-[25px] font-retro transition-colors ${
              activeMenu === item.label ? "retro-selected" : ""
            } ${item.isBold ? "text-[16px]" : ""}`}
            onMouseDown={() => setActiveMenu(item.label)}
            onMouseUp={() => setActiveMenu(null)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3 text-[12px] font-retro text-foreground pr-1">
        <span>{formatTime(currentTime)}</span>
      </div>
    </div>
  );
};

export default MenuBar;
