import { motion } from "framer-motion";
import finderIcon from "@/assets/finder-icon.png";
import trashIcon from "@/assets/trash-icon.png";

interface DockItem {
  label: string;
  icon: string;
}

const dockItems: DockItem[] = [
  { label: "Finder", icon: finderIcon },
];

const Dock = () => {
  return (
    <motion.div
      className="retro-dock fixed bottom-0 left-0 right-0 z-50 flex h-[58px] items-center justify-between px-3 select-none"
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
    >
      {/* Left side - app icons */}
      <div className="flex items-center gap-2">
        {dockItems.map((item) => (
          <motion.button
            key={item.label}
            className="flex flex-col items-center justify-center w-[44px] h-[44px] rounded-sm"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            title={item.label}
          >
            <img src={item.icon} alt={item.label} className="w-[36px] h-[36px] object-contain" draggable={false} />
          </motion.button>
        ))}
      </div>

      {/* Divider */}
      <div className="flex-1" />

      {/* Right side - trash */}
      <div className="flex items-center border-l border-dock-divider pl-3">
        <motion.button
          className="flex flex-col items-center justify-center w-[44px] h-[44px] rounded-sm"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          title="Trash"
        >
          <img src={trashIcon} alt="Trash" className="w-[36px] h-[36px] object-contain" draggable={false} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Dock;
