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

  const handleClick = (id: string) => {
    setSelectedId(id);
  };

  const handleDoubleClick = (item: ProjectItem) => {
    onOpenProject(item);
  };

  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-[12px] font-retro text-muted-foreground">
        This folder is empty.
      </div>
    );
  }

  // For About Me and Contact, show text content directly
  if (
    items.length === 1 &&
    (items[0].category === "About" || items[0].category === "Contact")
  ) {
    const item = items[0];
    return (
      <div className="p-4">
        <h2 className="text-[14px] font-retro font-bold text-foreground mb-3">
          {item.title}
        </h2>
        <div className="text-[12px] font-retro text-foreground leading-relaxed whitespace-pre-line">
          {item.description}
        </div>
      </div>
    );
  }

  return (
    <div className="p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
      {items.map((item, i) => {
        const isSelected = selectedId === item.id;
        const icon = item.thumbnail || (item.category === "Visual Design" ? imageFileIcon : fileIcon);

        return (
          <motion.div
            key={item.id}
            className={`flex flex-col items-center gap-1 p-2 cursor-pointer select-none rounded-sm ${
              isSelected ? "retro-selected" : "hover:bg-accent/50"
            }`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.2 }}
            onClick={() => handleClick(item.id)}
            onDoubleClick={() => handleDoubleClick(item)}
          >
            <img
              src={icon}
              alt={item.title}
              className="w-[40px] h-[40px] object-contain"
              draggable={false}
            />
            <span
              className={`text-[10px] font-retro text-center leading-tight max-w-[80px] truncate ${
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
