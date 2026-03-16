import { useState, useEffect } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  return (
    <div className="retro-menubar fixed top-0 left-0 right-0 z-[60] flex h-[30px] md:h-[28px] items-center justify-between px-1 select-none">
      <div className="flex items-center">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`px-3 py-0 text-[15px] md:text-[14px] leading-[30px] md:leading-[28px] font-retro transition-colors ${
              activeMenu === item.label ? "retro-selected" : ""
            } ${item.isBold ? "text-[17px] md:text-[16px]" : ""}`}
            onMouseDown={() => setActiveMenu(item.label)}
            onMouseUp={() => setActiveMenu(null)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4 text-[13px] md:text-[12px] font-retro text-foreground pr-2">
        <span className="hidden sm:inline">{formatDate(currentTime)}</span>
        <span>{formatTime(currentTime)}</span>
      </div>
    </div>
  );
};

export default MenuBar;
