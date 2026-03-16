import { motion } from "framer-motion";
import finderIcon from "@/assets/finder-icon.png";
import trashIcon from "@/assets/trash-icon.png";

interface DockProps {
  onFinderClick?: () => void;
}

const Dock = ({ onFinderClick }: DockProps) => {
  return (
    <motion.div
      className="retro-dock fixed bottom-0 left-0 right-0 z-[60] flex h-[60px] md:h-[56px] items-center justify-between px-3 select-none"
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
    >
      <div className="flex items-center gap-1">
        <motion.button
          className="flex items-center justify-center w-[48px] h-[48px] md:w-[44px] md:h-[44px]"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          title="Finder"
          onClick={onFinderClick}
        >
          <img src={finderIcon} alt="Finder" className="w-[40px] h-[40px] md:w-[36px] md:h-[36px] object-contain" draggable={false} />
        </motion.button>
      </div>

      <div className="flex-1" />

      <div className="flex items-center pl-3" style={{ borderLeft: "1px solid hsl(var(--dock-divider))" }}>
        <motion.button
          className="flex items-center justify-center w-[48px] h-[48px] md:w-[44px] md:h-[44px]"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          title="Trash"
        >
          <img src={trashIcon} alt="Trash" className="w-[40px] h-[40px] md:w-[36px] md:h-[36px] object-contain" draggable={false} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Dock;
