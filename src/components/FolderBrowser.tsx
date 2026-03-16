import { useState } from "react";
import { motion } from "framer-motion";
import { type ProjectItem } from "@/data/portfolioData";
import fileIcon from "@/assets/file-icon.png";
import imageFileIcon from "@/assets/image-file-icon.png";

interface FolderBrowserProps {
  items: ProjectItem[];
  onOpenProject: (item: ProjectItem) => void;
}

const FolderBrowser = ({ items, onOpenProject }: FolderBrowserProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-[14px] md:text-[13px] font-retro text-muted-foreground">
        This folder is empty.
      </div>
    );
  }

  if (
    items.length === 1 &&
    (items[0].category === "About" || items[0].category === "Contact")
  ) {
    const item = items[0];
    return (
      <div className="p-5">
        <h2 className="text-[16px] md:text-[15px] font-retro font-bold text-foreground mb-3">
          {item.title}
        </h2>
        <div className="text-[14px] md:text-[13px] font-retro text-foreground leading-relaxed whitespace-pre-line">
          {item.description}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
      {items.map((item, i) => {
        const isSelected = selectedId === item.id;
        const icon = item.thumbnail || (item.category === "Visual Design" ? imageFileIcon : fileIcon);

        return (
          <motion.div
            key={item.id}
            className={`flex flex-col items-center gap-1.5 p-3 cursor-pointer select-none rounded-sm ${
              isSelected ? "retro-selected" : "hover:bg-accent/50"
            }`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.2 }}
            onClick={() => setSelectedId(item.id)}
            onDoubleClick={() => onOpenProject(item)}
          >
            <img
              src={icon}
              alt={item.title}
              className="w-[52px] h-[52px] md:w-[48px] md:h-[48px] object-contain"
              draggable={false}
            />
            <span
              className={`text-[12px] md:text-[11px] font-retro text-center leading-tight max-w-[90px] truncate ${
                isSelected ? "text-highlight-foreground" : "text-foreground"
              }`}
            >
              {item.title}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FolderBrowser;
